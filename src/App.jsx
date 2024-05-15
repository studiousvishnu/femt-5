import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-8 col-lg-5 bg-white mx-auto rounded-3 p-4">
            <div className="img-container text-center py-2 ratio ratio-16x9   ">
              <img
                className="rounded-4"
                src="./src/Components/illustration-article.svg"
                alt=""
              />
            </div>
            <div className="tag bg-warning col-md-2 rounded-1 my-2 py-2 px-1 fw-bold">
              Learning
            </div>
            <div className="publish">Published on 21 Dec 2023</div>
            <div className="heading ">
              <h3 className="fs-2">HTML & CSS Foundations </h3>
            </div>
            <div className="content fw-semibold">
              <p style={{ color: "#949494" }}>
                These languages are the backbone of every website. defining
                structure, content. and presentation.
              </p>
            </div>
            <div className="author-container d-flex  align-items-center">
              <div className="author-img-container me-2">
                <img
                  className="rounded-circle "
                  src="./src/Components/image-avatar.webp"
                  alt=""
                  style={{  width:"50px" }}
                />
              </div>
              <div className="author-name-container fw-bolder" >
               <h6>Greg Hopper</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
