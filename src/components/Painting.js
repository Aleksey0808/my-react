import PropTypes from 'prop-types';
import defaultImg from '../components/default.jpg';

export default function Painting(props) {
  const {
    imageUrl = defaultImg,
    title,
    profileUrl,
    authorName = 'unknown',
    price,
    quantity,
  } = props;
  // console.log(props);
  return (
    <div>
      <img src={imageUrl ?? defaultImg} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
