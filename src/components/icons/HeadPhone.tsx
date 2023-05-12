interface HeadPhoneProps {
  className?: string;
}

const HeadPhone: React.FC<HeadPhoneProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 -300 1050 1050"
    fill="currentColor"
    stroke="currentColor"
  >
    <path
      transform="scale(1,-1) translate(0,-650)"
      strokeWidth="2"
      d="M899.413 570.539c-8.766 3.6-18.942 5.689-29.605 5.689-4.979 0-9.851-0.456-14.577-1.327l0.491 0.075c-8.425 183.313-159.090 328.742-343.723 328.742s-335.298-145.43-343.695-327.987l-0.028-0.755c-4.235 0.796-9.107 1.252-14.086 1.252-10.663 0-20.839-2.090-30.139-5.882l0.534 0.193c-72.613-30.859-122.607-101.581-122.607-183.979s49.994-153.12 121.304-183.486l1.303-0.493c8.879-3.884 19.226-6.145 30.101-6.145 0.098 0 0.196 0 0.293 0.001h-0.015c0.332-0.005 0.724-0.008 1.116-0.008 15.947 0 30.792 4.714 43.22 12.823l-0.304-0.186c22.213 14.924 36.68 39.886 36.864 68.239v279.921c0 152.507 123.631 276.139 276.139 276.139s276.139-123.631 276.139-276.139v0-326.315c0 0 0 0 0-0.001 0-58.319-47.18-105.619-105.453-105.813h-78.526c-14.208 37.011-49.457 62.805-90.73 62.805-53.538 0-96.939-43.401-96.939-96.939s43.401-96.939 96.939-96.939c41.274 0 76.523 25.794 90.506 62.142l0.224 0.663h78.507c84.567 0.357 154.903 60.842 170.488 140.894l0.178 1.1c4.596-1.211 9.966-2.063 15.479-2.379l0.222-0.010c0.083 0 0.18-0.001 0.278-0.001 10.875 0 21.222 2.26 30.597 6.337l-0.496-0.192c72.613 30.859 122.607 101.581 122.607 183.979s-49.994 153.12-121.304 183.486l-1.303 0.493zM167.595 277.333c-0.006-4.881-2.572-9.162-6.428-11.572l-0.057-0.033c-1.476-0.831-3.241-1.321-5.12-1.321s-3.644 0.49-5.173 1.349l0.053-0.027c-47.723 20.408-80.556 66.956-80.556 121.173s32.833 100.765 79.7 120.847l0.856 0.326h4.096c2.312-0.049 4.437-0.81 6.176-2.070l-0.032 0.022c3.913-2.443 6.48-6.724 6.485-11.605v-217.089zM873.131 264.363c-1.469-0.862-3.235-1.372-5.12-1.372s-3.651 0.509-5.168 1.398l0.048-0.026c-3.913 2.443-6.48 6.724-6.485 11.605v218.796c0.006 4.881 2.572 9.162 6.428 11.572l0.057 0.033c1.707 1.238 3.832 1.999 6.132 2.048h4.108c47.723-20.408 80.556-66.956 80.556-121.173s-32.833-100.765-79.7-120.847l-0.856-0.326z"
    />
  </svg>
);

export default HeadPhone;
