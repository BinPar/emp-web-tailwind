interface ActionButtonProps {
  text: string;
}
const ActionButton: React.FC<ActionButtonProps> = ({ text }) => (
  <button
    type="button"
    className="text-secondarygray tracking-[1px] uppercase text-xs hover:brightness-75"
  >
    {text}
  </button>
);
export default ActionButton;
