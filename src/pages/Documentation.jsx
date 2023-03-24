import styles from "./Documentation.module.css";

export default function Documentation() {
  return (
    <div className={styles.mainDiv}>
      <ol>
        {/* <li>
          <p className={styles.heading}>Inroduction:</p>
          <ul>
            <li>
              Welcome to our exquisite jewelry website, where you'll discover a
              stunning array of pieces that are designed to capture the essence
              of elegance and beauty. We offer a wide range of jewelry, from
              classic designs to modern styles, each of which is crafted with
              the utmost attention to detail and quality. Our collection
              features pieces made from precious metals such as gold and silver,
              adorned with sparkling diamonds, precious gemstones, and lustrous
              pearls.
            </li>{" "}
            <br />
            <li>
              Whether you're looking for a special piece of jewelry to mark a
              milestone event or simply want to treat yourself to something
              beautiful, our website offers a range of options to suit your
              style and budget. From delicate bracelets to bold statement
              necklaces, our collection is designed to cater to all tastes and
              preferences.
            </li>{" "}
            <br />
            <li>
              We take pride in our exceptional customer service and are
              committed to providing you with a seamless online shopping
              experience. Our knowledgeable staff is always on hand to answer
              any questions you may have and to help you find the perfect piece
              of jewelry to match your unique style.
            </li>
          </ul>
          <br />
        </li>
        <li>
          <p className={styles.heading}>Getting Started: </p>
          <ul>
            <li>
              Our website caters to individuals who appreciate the finer things
              in life and who have a passion for jewelry. Our target audience
              includes those who are seeking high-quality, luxurious pieces that
              are designed to last a lifetime. We understand that jewelry is not
              just an accessory, but an extension of one's personality and
              style.
            </li><br />
            <li>
              Our website is designed to offer a wide range of options to cater
              to different tastes and budgets. Whether you're looking for a
              classic diamond engagement ring or a trendy piece of fashion
              jewelry, our collection has something for everyone. We also
              provide detailed product descriptions, images, and specifications
              to help our customers make informed decisions about their
              purchases.
            </li>
            <br />
            <li>
              In addition, we prioritize customer satisfaction and offer
              exceptional service to ensure that our customers have a seamless
              shopping experience. Our team is always available to answer any
              questions and provide guidance on selecting the perfect piece of
              jewelry for any occasion.
            </li>
          </ul>
        </li> */}
        <li>
          <p className={styles.heading}>User Interface: </p>
          <ul>
            <li>
              There is a Navbar through which you can navigate between different
              pages i.e. Home, About, Contact Us, Users, Product and Login page.
            </li>
            <br />
            <li>
              User page is protected Route, without Login you will not be able
              to access it. <br /> Please Login first to see the information
              inside the Users page
            </li>{" "}
            <br />
            <li>Login Credentials are given in the Login page itself.</li>{" "}
            <br />
            <li>
              All the data inside Users page and Product page is coming from an
              external API. i.e. <br />
              <strong>
                https://api.escuelajs.co/api/v1/products
              </strong> <br />{" "}
              <strong> https://jsonplaceholder.typicode.com/comments</strong>
            </li>
            <br />
          </ul>
        </li>
        <li>
          <p className={styles.heading}>Features: </p>
          <ul>
            <li>
              You will see the Login option in the Navigation section, but as
              soon as user will login, that login option will convert into
              Logout.
            </li>
            <br />
            <li>
              when user will click on Logout, a logout button will be shown and
              as soon as user click on that button that user will be logged out.
            </li>
            <br />
            <li>
              If user will try to access the Users page without logging in then
              that user will redirected to the Login page.
            </li>
            <br />
            <li>Pagination is done at the bottom of Users page.</li> <br />
            <li>Users and Products page is fully responsive.</li>
          </ul>
        </li>
        {/* <li>
          Inroduction
          <ul>
            <li>
              Briefly describe what your website is about and what it offers.
            </li>
            <li>
              Include any important information about your target audience and
              why they would use your website.
            </li>
          </ul>
        </li>
        <li>
          Inroduction
          <ul>
            <li>
              Briefly describe what your website is about and what it offers.
            </li>
            <li>
              Include any important information about your target audience and
              why they would use your website.
            </li>
          </ul> */}
        {/* </li> */}
      </ol>
    </div>
  );
}
