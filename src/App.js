import './App.css';
import img1 from './images/176.jpg'

function App() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Service</li>
        </ul>
      </nav>
      <p className="p-lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique voluptatibus, eos nisi necessitatibus velit id iure, nam voluptates temporibus quod vitae officia alias ab quibusdam. Consequatur quod quo architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni porro tempora at deleniti ipsum, quaerat magnam modi perspiciatis vitae laudantium eaque quo, provident ea voluptatibus eligendi rerum. Veritatis, veniam magni?</p>
      <img src="https://www.easemytrip.com/travel/img/sunset-agra.jpg" alt="" className="img1" />
    </header>
    <br />
      <header>
        <nav className="nav1">
          <ul className="ul1">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Service</li>
            <li>Pages</li>
            <li>Account</li>
          </ul>
        </nav>
        <p className="lorem-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nesciunt, qui labore delectus fugiat repellat commodi corporis omnis unde ducimus necessitatibus inventore voluptas odio excepturi ratione sapiente veritatis sequi? Beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facilis ipsa ab doloribus reiciendis numquam itaque, quo aut doloremque modi similique enim, dolores ullam perspiciatis vero perferendis? Reiciendis, ad sint?</p>

        <img src={img1} alt="image" className="img2" />
      </header>
    </>
  );
}

export default App;
