export default function PrevSong({ ...props }) {
  return (
    <div {...props}>
      <svg
        className="fill-black dark:fill-white control-btn"
        xmlns="http://www.w3.org/2000/svg"
        height="1.3em"
        width="1.3em"
        viewBox="0 0 512 512"
      >
        <path d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7V416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64s32 14.3 32 32V214.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96V214.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96V416c0 12.4-7.2 23.7-18.4 29z" />
      </svg>
    </div>
  );
}
