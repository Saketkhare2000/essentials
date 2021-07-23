import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { db } from '../firebase';
function Software() {
  const [software, setAllSoftware] = useState([]);

  useEffect(() => {
    db.collection('softwares').onSnapshot((querySnapshot) => {
      setAllSoftware(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          link: doc.data().link,
        }))
      );
    });
  }, ['', software]);
  console.log(software);
  return (
    <div>
      <h1>{software}</h1>
    </div>
  );
}

export default Software;
