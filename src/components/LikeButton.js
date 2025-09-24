import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, onSnapshot, increment } from "firebase/firestore";
import "../styles/LikeButton.css";

function LikeButton({ videoId }) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!videoId) return;
    const ref = doc(db, "likes", videoId.toString());

    // Ensure the document exists
    const createDocIfMissing = async () => {
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        await setDoc(ref, { count: 0 });
      }
    };
    createDocIfMissing();

    // Real-time listener for count updates
    const unsubscribe = onSnapshot(ref, (docSnap) => {
      if (docSnap.exists()) {
        setCount(docSnap.data().count ?? 0);
      } else {
        setCount(0);
      }
    });

    return () => unsubscribe();
  }, [videoId]);

  const handleClick = async () => {
    if (!videoId) return;
    const ref = doc(db, "likes", videoId.toString());

    try {
      if (!liked) {
        await updateDoc(ref, { count: increment(1) });
        setLiked(true);
      } else {
        await updateDoc(ref, { count: increment(-1) });
        setLiked(false);
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <div className="like-container">
      <button
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={handleClick}
      >
        <svg
          className="heart-icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                   C13.09 3.81 14.76 3 16.5 3
                   19.58 3 22 5.42 22 8.5
                   c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
      <div className="like-count">{count}</div>
    </div>
  );
}

export default LikeButton;
