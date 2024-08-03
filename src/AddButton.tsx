type AddButtonProps = {
  icon: string;
  onClick: () => void;
};

export default function AddButton({ icon, onClick }: AddButtonProps) {
  return (
    <button className="btn btn-outline-secondary me-2" onClick={onClick}>
      <img src={icon} style={{ width: "1rem"}}/>
    </button>
  );
}
