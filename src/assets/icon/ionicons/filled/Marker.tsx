const Marker: React.FC<{
  lat?: number;
  lng?: number;
}> = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 17.5C21.3807 17.5 22.5 16.3807 22.5 15C22.5 13.6193 21.3807 12.5 20 12.5C18.6193 12.5 17.5 13.6193 17.5 15C17.5 16.3807 18.6193 17.5 20 17.5Z"
        fill="#408BD0"
      />
      <path
        d="M20 2.5C13.1078 2.5 7.5 7.86328 7.5 14.4531C7.5 17.5914 8.93047 21.7648 11.7516 26.8578C14.0172 30.9469 16.6383 34.6445 18.0016 36.4844C18.2319 36.7987 18.5331 37.0544 18.8807 37.2306C19.2284 37.4069 19.6126 37.4987 20.0023 37.4987C20.3921 37.4987 20.7763 37.4069 21.1239 37.2306C21.4716 37.0544 21.7728 36.7987 22.0031 36.4844C23.3641 34.6445 25.9875 30.9469 28.2531 26.8578C31.0695 21.7664 32.5 17.593 32.5 14.4531C32.5 7.86328 26.8922 2.5 20 2.5ZM20 20C19.0111 20 18.0444 19.7068 17.2221 19.1573C16.3999 18.6079 15.759 17.827 15.3806 16.9134C15.0022 15.9998 14.9031 14.9945 15.0961 14.0245C15.289 13.0546 15.7652 12.1637 16.4645 11.4645C17.1637 10.7652 18.0546 10.289 19.0245 10.0961C19.9945 9.90315 20.9998 10.0022 21.9134 10.3806C22.827 10.759 23.6079 11.3999 24.1573 12.2221C24.7068 13.0444 25 14.0111 25 15C24.9986 16.3256 24.4713 17.5966 23.5339 18.5339C22.5966 19.4713 21.3256 19.9986 20 20Z"
        fill="#408BD0"
      />
    </svg>
  );
};
export default Marker;
