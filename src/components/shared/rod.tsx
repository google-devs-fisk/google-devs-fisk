type Props = {
    style?: string;
}

const Rod = ({style=""}:Props) => {
  return (
    <div className={`${style} bg-gradient-to-b from-[#273f6d] via-[#45377a] to-[#4f075f] rounded-xl`}></div>
  );
};

export default Rod;
