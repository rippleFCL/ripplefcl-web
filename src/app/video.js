export default function Video() {
  return <video autoPlay={true} loop={true} src={require('../../public/bg.webm')} />;
}