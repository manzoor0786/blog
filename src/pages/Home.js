// import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
// import React, { useEffect, useState } from 'react'
// import { db, auth } from '../firebase-config'
// import { Button, Col, Container, Modal, Row } from 'react-bootstrap'








// function Home({ isAuth }) {

//   const [postList, setPostList] = useState([])
//   const postsCollectionRef = collection(db, "posts")


//   useEffect(() => {

//     const getPosts = async () => {
//       const data = await getDocs(postsCollectionRef)
//       setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     }
//     getPosts()

//   }, [])

//   const deletePost = async (id) => {
//     const postDoc = doc(db, "posts", id)
//     await deleteDoc(postDoc)

//     const updatedData = await getDocs(postsCollectionRef);
//     setPostList(updatedData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

//   }


//   const likeCount = async (postId) => {
//     const postRef = doc(db, "posts", postId);
//     const postSnapshot = await getDoc(postRef);

//     if (postSnapshot.exists()) {
//       const postData = postSnapshot.data();
//       const currentLikes = postData.likes || 0;

//       const userLiked = postData.usersLiked && postData.usersLiked.includes(auth.currentUser.uid);

//       let updatedLikes = currentLikes;

//       if (userLiked) {
//         updatedLikes = currentLikes - 1;
//         const updatedUsersLiked = postData.usersLiked.filter(userId => userId !== auth.currentUser.uid);

//         await updateDoc(postRef, { likes: updatedLikes, usersLiked: updatedUsersLiked });
//       } else {
//         updatedLikes = currentLikes + 1;
//         const updatedUsersLiked = [...(postData.usersLiked || []), auth.currentUser.uid];

//         await updateDoc(postRef, { likes: updatedLikes, usersLiked: updatedUsersLiked });
//       }

//       setPostList((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === postId ? { ...post, likes: updatedLikes } : post
//         )
//       );
//     }
//   };


//   const [editPostId, setEditPostId] = useState(null);
//   const [editedText, setEditedText] = useState('');

//   const openEditModal = (postId, postText) => {
//     setEditPostId(postId);
//     setEditedText(postText);
//   };

//   const closeEditModal = () => {
//     setEditPostId(null);
//     setEditedText('');
//   };

//   const updatePost = async () => {
//     const postRef = doc(db, 'posts', editPostId);
//     await updateDoc(postRef, { postText: editedText });

//     const updatedData = await getDocs(postsCollectionRef);
//     setPostList(updatedData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

//     closeEditModal();
//   };





//   return (
//     <Container className="d-flex justify-content-center align-items-center ">
//       <div className='homePage text-center mt-5'>
//         <h1 className='fs-1'>Posts</h1>


//         {
//         postList.map((post) => {
//           return <div className='post shadow  p-5 ' style={{margin:"50px"}} >
         
         

//                 <div className='postHeader'>

//                   <div className='text-start'><h4>@{post.author.name}</h4></div>

           
//               <div className="title">
//                 <h1> {post.title}</h1>
//               </div>



//                   <div className='postTxtContainer'>{post.postText}</div>

//                 </div>
             
              
//                 <div className='text-end'>
//                   <Button style={{ backgroundColor: 'transparent', border: 0 }} onClick={() => likeCount(post.id)} className='mt-5 pt-3 ps-1'><i class="fa-regular fa-heart  fs-1 text-black"></i><br /><p className=' ps-1 text-black'>{post.likes || 0}</p></Button>

//                 </div>
//                 <div className='deletePost text-end'>
//                   {
//                     isAuth && post.author.id === auth.currentUser.uid &&
//                     <div>  <Button style={{ backgroundColor: 'transparent', border: 0 }} onClick={() => { deletePost(post.id) }}><i class="fa-solid fa-trash-can mt-2 fs-1 text-black"></i></Button></div>}

//                 </div>

//                 <div className='editPost text-end'>
//                   {isAuth && post.author.id === auth.currentUser.uid && (
//                     <>
//                       <Button
//                         style={{ backgroundColor: 'transparent', border: 0 }}
//                         onClick={() => openEditModal(post.id, post.postText)}
//                       >
//                         <i className="fa-solid fa-pencil mt-4 pt-2 fs-1 text-black"></i>
//                       </Button>

//                     </>
//                   )}
//                 </div>

      

           
//           </div>
//         })}

//       </div>

//       <Modal show={editPostId !== null} onHide={closeEditModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Post</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//           <textarea
//             value={editedText}
//             onChange={(e) => setEditedText(e.target.value)}
//             rows={4}
//             className="form-control"
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={closeEditModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={updatePost}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   )
// }

// export default Home

import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  var deletePost = async (id) => {
    var postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>

              {/* */} <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >

                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;