export const BlogBox = (props) =>{
    return (
        <div class="col-md-6 col-lg-4 mx-auto">
            <div class="box">
              <div class="img-box">
                <img src={props.src} alt="" />
              </div>
              <div class="detail-box">
                <h5>{props.heading}</h5>
                <p>
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
    )
}