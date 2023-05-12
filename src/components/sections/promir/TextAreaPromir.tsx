interface TextAreaPromir {
  placeHolder: string;
}
const TextAreaPromir: React.FC<TextAreaPromir> = ({ placeHolder }) => (
  <textarea
    className="h-14 border border-gray-300 w-full appearance-none outline-none px-3 py-2 text-primary bg-white placeholder-primary placeholder:text-xs"
    placeholder={placeHolder}
  ></textarea>
);
export default TextAreaPromir;
