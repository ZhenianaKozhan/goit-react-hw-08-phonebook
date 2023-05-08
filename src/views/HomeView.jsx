import { Link } from 'react-router-dom';

const HomeView = () => (
  <Link to="/login" style={{}}>
    <div
      style={{
        backgroundImage: `url(
        'https://play-lh.googleusercontent.com/7O6Mvzvsy_gxPY7IPHN5iJWo9CB9CEeUvs8Ha1m1v0fctHD-tLwBR6TycZ45V-5aGkE'
      )`,
        backgroundSize: '100% 100%',
        height: '300px',
        width: '300px',
        margin: 'auto',
        marginTop: '100px',
      }}
    ></div>
  </Link>
);

export default HomeView;
