import FunctionalComponentUI from "./Functaionalcomponent.presenter";

export default function FunctionalComponent() {
  // return <FunctionalComponentUI count={555} school="토끼초등학교" />;
  return (
    <div>{FunctionalComponentUI({ aaa: 3, school: "다람쥐초등학교" })}</div>
  );
}

// function add(asdf){
//   return asdf.school
// }

// FunctionalComponentUI({ aaa: 3, school: "다람쥐초등학교" })

// const add = (asdf, bsdf) => {
//   return asdf + bsdf
// }

// add(1, 2)

// ["철수", "영희", "훈이"].map((data, index) => `${data}는 ${index}번째 입니다.`)

// (dataasdf, indexasdf) => `${dataasdf}는 ${indexasdf}번째 입니다.`
// ("철수", 0)
// ("영희", 1)
// ("훈이", 2)

// ["철수", "영희", "훈이"].map((index) => `${index}번째 입니다.`)

// const [state, setState] = useState(0)

// setState(asdfasdfasdf => asdfasdfasdf + 1)
