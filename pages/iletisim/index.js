import Title from "../../components/Title";
import { Container } from "./styles";

const Contact = () => {
  return (
    <>
      <Title text='İletişim' />
      <Container>
        <p>icedigitalbasvuru@gmail.com</p>
        <div className='form'>
          <h5>Bizimle İletişime Geçin !</h5>
          <span>Sizinle çalışmak için heyecanlıyız !</span>

          <div>
            <label>Email</label>
            <input />
            <button>Subscribe</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
