import { useEffect, useState } from "react";
import styles from "../AllCss/users.module.css";

export default function Products() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const[count, setCount] = useState(1)

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setError(false);
      });
  }, [page]);

  const handleMinus = (x) => {
    setPage((prev) => prev - x);
    setCount((prev)=> prev-1)
  };

  const handlePlus = (x) => {
    setPage((prev) => prev + x);
    setCount((prev)=> prev+1)
  };

  let array_div=  data?.map((el) => {
    return (
      <div  style={{border: "1px solid gray", paddingTop:"10px",  borderRadius: "10px"}}  >
        <img  style={{borderRadius:"10px", }} width="50%"  src={el.category.image} alt="" />
        <p> {el.title} </p>
        {/* <p> <strong>Name: {el.name} </strong> </p> */}
        {/* <p>email: {el.email}</p> */}
        {/* <p>Discription: {el.body}</p> */}
        {/* <p>Post ID: {el.postId}</p> */}

      </div>
    );
  })

  return loading ? (
    <h1>Loading.......</h1>
  ) : (
    <div>
      {/* {data.map((el) => {
        return (
          <div className={styles.users}>
            <img src={el.thumbnailUrl} alt="" />
            <h3>{el.title}</h3>
            <h1>hi</h1>
            <h1>by</h1>
          </div>
        );
      })} */}
      <div className={styles.users}> {array_div}</div>
      {/* <div className={styles.btnDiv}>
        <button className={styles.btn} disabled={count === 1} onClick={() => handleMinus(1)}>
          -
        </button>
        <button style={{border:"none", padding:"20px 50px", backgroundColor:"white", fontSize:"30px"}}>{count}</button>
        <button  className={styles.btn} onClick={() => handlePlus(1)}>+</button>
      </div> */}
    </div>
  );
}
