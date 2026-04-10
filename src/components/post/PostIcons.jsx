import angryFace from "../../images/angry_face_3d.png";
import astonishedFace from "../../images/astonished_face_3d.png";
import cryingFace from "../../images/crying_face_3d.png";
import grinningSquintingFace from "../../images/grinning_squinting_face_3d.png";
import redHeart from "../../images/red_heart_3d.png";
import thumbsUp from "../../images/thumbs_up_3d_default.png";

export const HeartIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <img src={redHeart} height={height} width={width} />

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 32 32"
    //   width={size || width || 24}
    //   height={size || height || 24}
    //   {...props}
    // >
    //   <g fill="none">
    //     <path
    //       fill="url(#f2088id0)"
    //       d="M15.217 29.201a1.732 1.732 0 0 0 1.71-.021c3.584-2.048 9.81-6.762 12.255-12.885c3.59-7.973-4.838-14.337-10.662-9.76c-.608.478-1.372 1.025-1.897 1.542c-.238.234-.657.258-.904.034c-.69-.63-1.771-1.436-2.465-1.905c-4.965-3.36-14 1.069-10.146 10.52c1.412 4.242 8.14 10.26 12.109 12.476Z"
    //     />
    //     <path
    //       fill="url(#f2088id1)"
    //       d="M15.217 29.201a1.732 1.732 0 0 0 1.71-.021c3.584-2.048 9.81-6.762 12.255-12.885c3.59-7.973-4.838-14.337-10.662-9.76c-.608.478-1.372 1.025-1.897 1.542c-.238.234-.657.258-.904.034c-.69-.63-1.771-1.436-2.465-1.905c-4.965-3.36-14 1.069-10.146 10.52c1.412 4.242 8.14 10.26 12.109 12.476Z"
    //     />
    //     <path
    //       fill="url(#f2088id2)"
    //       d="M15.217 29.201a1.732 1.732 0 0 0 1.71-.021c3.584-2.048 9.81-6.762 12.255-12.885c3.59-7.973-4.838-14.337-10.662-9.76c-.608.478-1.372 1.025-1.897 1.542c-.238.234-.657.258-.904.034c-.69-.63-1.771-1.436-2.465-1.905c-4.965-3.36-14 1.069-10.146 10.52c1.412 4.242 8.14 10.26 12.109 12.476Z"
    //     />
    //     <path
    //       fill="url(#f2088id3)"
    //       d="M15.217 29.201a1.732 1.732 0 0 0 1.71-.021c3.584-2.048 9.81-6.762 12.255-12.885c3.59-7.973-4.838-14.337-10.662-9.76c-.608.478-1.372 1.025-1.897 1.542c-.238.234-.657.258-.904.034c-.69-.63-1.771-1.436-2.465-1.905c-4.965-3.36-14 1.069-10.146 10.52c1.412 4.242 8.14 10.26 12.109 12.476Z"
    //     />
    //     <path
    //       fill="url(#f2088idd)"
    //       d="M15.217 29.201a1.732 1.732 0 0 0 1.71-.021c3.584-2.048 9.81-6.762 12.255-12.885c3.59-7.973-4.838-14.337-10.662-9.76c-.608.478-1.372 1.025-1.897 1.542c-.238.234-.657.258-.904.034c-.69-.63-1.771-1.436-2.465-1.905c-4.965-3.36-14 1.069-10.146 10.52c1.412 4.242 8.14 10.26 12.109 12.476Z"
    //     />
    //     <path
    //       fill="url(#f2088ide)"
    //       d="M15.217 29.201a1.732 1.732 0 0 0 1.71-.021c3.584-2.048 9.81-6.762 12.255-12.885c3.59-7.973-4.838-14.337-10.662-9.76c-.608.478-1.372 1.025-1.897 1.542c-.238.234-.657.258-.904.034c-.69-.63-1.771-1.436-2.465-1.905c-4.965-3.36-14 1.069-10.146 10.52c1.412 4.242 8.14 10.26 12.109 12.476Z"
    //     />
    //     <path
    //       fill="url(#f2088id4)"
    //       fillOpacity=".6"
    //       d="M15.217 29.201a1.732 1.732 0 0 0 1.71-.021c3.584-2.048 9.81-6.762 12.255-12.885c3.59-7.973-4.838-14.337-10.662-9.76c-.608.478-1.372 1.025-1.897 1.542c-.238.234-.657.258-.904.034c-.69-.63-1.771-1.436-2.465-1.905c-4.965-3.36-14 1.069-10.146 10.52c1.412 4.242 8.14 10.26 12.109 12.476Z"
    //     />
    //     <g filter="url(#f2088id7)">
    //       <path
    //         fill="#FA1C56"
    //         d="M15.908 10.54v6.823c0 .905 1.096 1.334 1.66.627c1.745-2.19 3.153-4.851 1.582-7.025c-.602-.834-1.756-1.368-2.699-1.198c-.352.063-.543.415-.543.774Z"
    //       />
    //     </g>
    //     <g filter="url(#f2088id8)">
    //       <ellipse
    //         cx="24.663"
    //         cy="11.377"
    //         fill="url(#f2088id5)"
    //         rx="4.462"
    //         ry="3.7"
    //         transform="rotate(-44.19 24.663 11.377)"
    //       />
    //     </g>
    //     <g filter="url(#f2088id9)">
    //       <ellipse
    //         cx="23.46"
    //         cy="6.067"
    //         fill="#FF7383"
    //         rx="1.693"
    //         ry=".356"
    //         transform="rotate(7.165 23.46 6.067)"
    //       />
    //     </g>
    //     <g filter="url(#f2088ida)">
    //       <ellipse
    //         cx="9.389"
    //         cy="6.053"
    //         fill="#FF93BA"
    //         fillOpacity=".5"
    //         rx="1.519"
    //         ry=".249"
    //         transform="rotate(-.697 9.389 6.053)"
    //       />
    //     </g>
    //     <g filter="url(#f2088idb)">
    //       <path
    //         fill="url(#f2088id6)"
    //         d="m14.845 9.962l.313 10.25C8.283 13.524 6.96 8.828 9.595 7.774c2.5-1 4.5.625 5.25 2.188Z"
    //       />
    //     </g>
    //     <g filter="url(#f2088idc)">
    //       <path
    //         fill="#FF7383"
    //         d="M14.345 9.362c-.84-.12-1.1-.817-1.125-1.15c.48.5.95.542 1.125.5v.65Z"
    //       />
    //     </g>
    //     <defs>
    //       <radialGradient
    //         id="f2088id0"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 22.9845 -24.4021 0 15.883 5.634)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FC0000" />
    //         <stop offset=".528" stopColor="#FF3B79" />
    //         <stop offset={1} stopColor="#F724B3" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2088id1"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-14.87866 15.19253 -28.45705 -27.86914 23.025 11.363)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".798" stopColor="#C82092" stopOpacity={0} />
    //         <stop offset=".908" stopColor="#C82092" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2088id2"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-21.1897 -8.27729 11.70114 -29.9547 19.997 17.789)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".41" stopColor="#B91D43" stopOpacity={0} />
    //         <stop offset=".834" stopColor="#B91D43" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2088id3"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(90 .872 14.688) scale(19.7992)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".671" stopColor="#FF7AF2" stopOpacity={0} />
    //         <stop offset=".934" stopColor="#FFBCE6" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2088id4"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-16.59795 4.56623 -4.82236 -17.52896 18.347 12.896)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".802" stopColor="#FF73A6" stopOpacity={0} />
    //         <stop offset={1} stopColor="#FF93BA" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2088id5"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(172.927 14.212 6.526) scale(7.29137 9.69562)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FF7383" />
    //         <stop offset={1} stopColor="#FF7383" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2088id6"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-9.06248 -8.87742 15.75895 -16.08745 16.345 13.84)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FF6274" />
    //         <stop offset={1} stopColor="#FF6274" stopOpacity={0} />
    //       </radialGradient>
    //       <filter
    //         id="f2088id7"
    //         width="7.923"
    //         height="12.608"
    //         x="13.908"
    //         y="7.735"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_7305_6094"
    //           stdDeviation={1}
    //         />
    //       </filter>
    //       <filter
    //         id="f2088id8"
    //         width="11.219"
    //         height="11.176"
    //         x="19.054"
    //         y="5.789"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_7305_6094"
    //           stdDeviation=".75"
    //         />
    //       </filter>
    //       <filter
    //         id="f2088id9"
    //         width="7.36"
    //         height="4.823"
    //         x="19.78"
    //         y="3.656"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_7305_6094"
    //           stdDeviation={1}
    //         />
    //       </filter>
    //       <filter
    //         id="f2088ida"
    //         width="6.037"
    //         height="3.5"
    //         x="6.37"
    //         y="4.303"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_7305_6094"
    //           stdDeviation=".75"
    //         />
    //       </filter>
    //       <filter
    //         id="f2088idb"
    //         width="12.825"
    //         height="18.745"
    //         x="5.333"
    //         y="4.467"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_7305_6094"
    //           stdDeviation="1.5"
    //         />
    //       </filter>
    //       <filter
    //         id="f2088idc"
    //         width="3.125"
    //         height="3.15"
    //         x="12.22"
    //         y="7.212"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_7305_6094"
    //           stdDeviation=".5"
    //         />
    //       </filter>
    //       <linearGradient
    //         id="f2088idd"
    //         x1="17.745"
    //         x2="25.758"
    //         y1="16.133"
    //         y2="25.669"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".694" stopColor="#FF7AF2" stopOpacity={0} />
    //         <stop offset=".934" stopColor="#FFBCE6" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2088ide"
    //         x1="16.752"
    //         x2="7.349"
    //         y1="16.53"
    //         y2="27.125"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".694" stopColor="#FF7AF2" stopOpacity={0} />
    //         <stop offset=".934" stopColor="#FFBCE6" />
    //       </linearGradient>
    //     </defs>
    //   </g>
    // </svg>
  );
};
export const HeartOultineIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? fill : "none"}
      height={size || height || 24}
      width={size || width || 24}
      {...props}
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export const CommentIcon = ({
  fill = "#fff",
  filled = true,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      fill="#fff"
      height={size || height || 18}
      width={size || width || 18}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        id="SVGRepo_iconCarrier"
        height={size || height || 18}
        width={size || width || 18}
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `.cls-1{fill:none;stroke:${(fill = filled ? fill : "none")};stroke-miterlimit:10;stroke-width:1.5;}`,
            }}
          />
        </defs>
        <path
          className="cls-1"
          d="M1.5,5.3v9.54a3.82,3.82,0,0,0,3.82,3.82H7.23v2.86L13,18.66h5.73a3.82,3.82,0,0,0,3.82-3.82V5.3a3.82,3.82,0,0,0-3.82-3.82H5.32A3.82,3.82,0,0,0,1.5,5.3Z"
        />
      </g>
    </svg>
  );
};

export const ShareIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
      </g>
    </svg>
  );
};

export const ThumbsUpIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <img src={thumbsUp} height={height} width={width} />

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 32 32"
    //   width={size || width || 24}
    //   height={size || height || 24}
    //   {...props}
    // >
    //   <g fill="none">
    //     <g filter="url(#f2373idq)">
    //       <path
    //         fill="url(#f2373idd)"
    //         d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785c0 .322-.023.644-.073.966a6.06 6.06 0 0 0-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.338 9.338 0 0 1 5.081 8.326a9.38 9.38 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003V5.159Z"
    //       />
    //     </g>
    //     <path
    //       fill="url(#f2373id0)"
    //       d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785c0 .322-.023.644-.073.966a6.06 6.06 0 0 0-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.338 9.338 0 0 1 5.081 8.326a9.38 9.38 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003V5.159Z"
    //     />
    //     <path
    //       fill="url(#f2373id1)"
    //       d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785c0 .322-.023.644-.073.966a6.06 6.06 0 0 0-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.338 9.338 0 0 1 5.081 8.326a9.38 9.38 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003V5.159Z"
    //     />
    //     <path
    //       fill="url(#f2373id2)"
    //       d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785c0 .322-.023.644-.073.966a6.06 6.06 0 0 0-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.338 9.338 0 0 1 5.081 8.326a9.38 9.38 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003V5.159Z"
    //     />
    //     <path
    //       fill="url(#f2373ide)"
    //       d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785c0 .322-.023.644-.073.966a6.06 6.06 0 0 0-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.338 9.338 0 0 1 5.081 8.326a9.38 9.38 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003V5.159Z"
    //     />
    //     <g filter="url(#f2373idr)">
    //       <path
    //         fill="url(#f2373idf)"
    //         d="M23.679 14.709a2.552 2.552 0 0 0-2.552-2.552h-2.826a2.552 2.552 0 0 0-1.638 4.509a2.557 2.557 0 0 0-.116 3.992a2.546 2.546 0 0 0-.901 1.947v.125c0 .7.28 1.333.736 1.794a2.483 2.483 0 0 0 1.746 4.248h2.804a2.483 2.483 0 0 0 2.15-3.728a2.552 2.552 0 0 0 1.472-2.314v-.125c0-.79-.358-1.496-.922-1.964a2.561 2.561 0 0 0-.587-4.249a2.54 2.54 0 0 0 .634-1.683Z"
    //       />
    //     </g>
    //     <g filter="url(#f2373ids)">
    //       <rect
    //         width="5.82"
    //         height="9.043"
    //         x="25.957"
    //         y="10.73"
    //         fill="url(#f2373idg)"
    //         rx="2.91"
    //         transform="rotate(90 25.957 10.73)"
    //       />
    //       <rect
    //         width="5.82"
    //         height="9.043"
    //         x="25.957"
    //         y="10.73"
    //         fill="url(#f2373id3)"
    //         rx="2.91"
    //         transform="rotate(90 25.957 10.73)"
    //       />
    //     </g>
    //     <g filter="url(#f2373idt)">
    //       <rect
    //         width="5.664"
    //         height="8.861"
    //         x="25.657"
    //         y="24.015"
    //         fill="url(#f2373idh)"
    //         rx="2.832"
    //         transform="rotate(90 25.657 24.015)"
    //       />
    //       <rect
    //         width="5.664"
    //         height="8.861"
    //         x="25.657"
    //         y="24.015"
    //         fill="url(#f2373id4)"
    //         rx="2.832"
    //         transform="rotate(90 25.657 24.015)"
    //       />
    //       <rect
    //         width="5.664"
    //         height="8.861"
    //         x="25.657"
    //         y="24.015"
    //         fill="url(#f2373id5)"
    //         rx="2.832"
    //         transform="rotate(90 25.657 24.015)"
    //       />
    //     </g>
    //     <rect
    //       width="5.664"
    //       height="8.861"
    //       x="25.657"
    //       y="24.015"
    //       fill="url(#f2373idi)"
    //       rx="2.832"
    //       transform="rotate(90 25.657 24.015)"
    //     />
    //     <rect
    //       width="5.664"
    //       height="8.861"
    //       x="25.657"
    //       y="24.015"
    //       fill="url(#f2373id6)"
    //       rx="2.832"
    //       transform="rotate(90 25.657 24.015)"
    //     />
    //     <g filter="url(#f2373idu)">
    //       <rect
    //         width="5.37"
    //         height="1.476"
    //         x="19.622"
    //         y="25.699"
    //         fill="url(#f2373idj)"
    //         rx=".738"
    //       />
    //     </g>
    //     <rect
    //       width="5.964"
    //       height="10.159"
    //       x="26.955"
    //       y="19.735"
    //       fill="#C4C4C4"
    //       fillOpacity=".66"
    //       rx="2.982"
    //       transform="rotate(90 26.955 19.735)"
    //     />
    //     <g filter="url(#f2373idv)">
    //       <rect
    //         width="5.964"
    //         height="10.159"
    //         x="26.955"
    //         y="19.735"
    //         fill="url(#f2373idk)"
    //         rx="2.91"
    //         transform="rotate(90 26.955 19.735)"
    //       />
    //       <rect
    //         width="5.964"
    //         height="10.159"
    //         x="26.955"
    //         y="19.735"
    //         fill="url(#f2373id7)"
    //         rx="2.91"
    //         transform="rotate(90 26.955 19.735)"
    //       />
    //       <rect
    //         width="5.964"
    //         height="10.159"
    //         x="26.955"
    //         y="19.735"
    //         fill="url(#f2373id8)"
    //         rx="2.91"
    //         transform="rotate(90 26.955 19.735)"
    //       />
    //     </g>
    //     <g filter="url(#f2373idw)">
    //       <rect
    //         width="6.725"
    //         height="1.476"
    //         x="19.232"
    //         y="21.829"
    //         fill="url(#f2373idl)"
    //         rx=".738"
    //       />
    //     </g>
    //     <g filter="url(#f2373idx)">
    //       <rect
    //         width="5.833"
    //         height="10.114"
    //         x="26.909"
    //         y="15.285"
    //         fill="url(#f2373idm)"
    //         rx="2.91"
    //         transform="rotate(90 26.91 15.285)"
    //       />
    //       <rect
    //         width="5.833"
    //         height="10.114"
    //         x="26.909"
    //         y="15.285"
    //         fill="url(#f2373id9)"
    //         rx="2.91"
    //         transform="rotate(90 26.91 15.285)"
    //       />
    //     </g>
    //     <path
    //       fill="url(#f2373ida)"
    //       d="M15.556 1.87a3.289 3.289 0 0 0-3.288 3.288v2.553l-.002-.001c0 .562-.078 1.776-.48 2.523c-.465.863-1.344 1.39-2.064 1.821c-.22.132-.424.254-.597.374c.995.797 3.032 2.39 3.082 2.352a363.35 363.35 0 0 1 3.484-1.86l-.048-.69a3.289 3.289 0 0 0 3.202-3.287V5.158a3.289 3.289 0 0 0-3.289-3.288Z"
    //     />
    //     <path
    //       fill="url(#f2373idb)"
    //       d="M15.556 1.87a3.289 3.289 0 0 0-3.288 3.288v2.553l-.002-.001c0 .562-.078 1.776-.48 2.523c-.465.863-1.344 1.39-2.064 1.821c-.22.132-.424.254-.597.374c.995.797 3.032 2.39 3.082 2.352a363.35 363.35 0 0 1 3.484-1.86l-.048-.69a3.289 3.289 0 0 0 3.202-3.287V5.158a3.289 3.289 0 0 0-3.289-3.288Z"
    //     />
    //     <path
    //       fill="#FFBF71"
    //       d="M13.476 2.611a3.282 3.282 0 0 0-1.208 2.547v.192h1.486a6.35 6.35 0 0 0-.086-1.148l-.017-.091c-.082-.448-.176-.96-.175-1.5Z"
    //     />
    //     <path
    //       fill="url(#f2373idc)"
    //       d="M13.476 2.611a3.282 3.282 0 0 0-1.208 2.547v.192h1.486a6.35 6.35 0 0 0-.086-1.148l-.017-.091c-.082-.448-.176-.96-.175-1.5Z"
    //     />
    //     <g filter="url(#f2373idy)">
    //       <rect
    //         width="6.136"
    //         height="2.516"
    //         x="18.856"
    //         y="11.524"
    //         fill="url(#f2373idn)"
    //         rx="1.258"
    //       />
    //     </g>
    //     <g filter="url(#f2373idz)">
    //       <rect
    //         width="7.172"
    //         height="2.516"
    //         x="18.785"
    //         y={16}
    //         fill="url(#f2373ido)"
    //         rx="1.258"
    //       />
    //     </g>
    //     <g filter="url(#f2373id10)">
    //       <rect
    //         width="2.865"
    //         height="7.997"
    //         x="15.15"
    //         y="3.112"
    //         fill="url(#f2373idp)"
    //         rx="1.433"
    //       />
    //     </g>
    //     <defs>
    //       <radialGradient
    //         id="f2373id0"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(141.116 9.365 6.03) scale(5.01564 14.8034)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFE34C" />
    //         <stop offset={1} stopColor="#FFE34C" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id1"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(125.191 1.565 10.819) scale(7.43021 5.38256)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFCA2E" />
    //         <stop offset={1} stopColor="#FFCA2E" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id2"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-13.53897 8.8789 -15.5384 -23.69368 19.37 18.131)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".681" stopColor="#E18E3F" stopOpacity={0} />
    //         <stop offset={1} stopColor="#E18E3F" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id3"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-1.40872 1.84473 -1.2348 -.94296 31.447 18.303)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#D98320" />
    //         <stop offset={1} stopColor="#D98320" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id4"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 -7.31347 2.78222 0 31.32 31.081)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#F29545" />
    //         <stop offset={1} stopColor="#F29545" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id5"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 -7.4169 1.99096 0 26.65 31.432)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#DA810B" />
    //         <stop offset={1} stopColor="#FFB610" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id6"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 -5.60324 8.4227 0 28.488 34.049)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#E38811" />
    //         <stop offset={1} stopColor="#E38811" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id7"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 -8.38517 2.92967 0 32.919 27.836)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#F29545" />
    //         <stop offset={1} stopColor="#F29545" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id8"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 -8.50376 2.09648 0 28.002 28.239)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#DA810B" />
    //         <stop offset={1} stopColor="#FFB610" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373id9"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 -5.50067 2.44847 0 32.037 23.307)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#F29545" />
    //         <stop offset={1} stopColor="#F29545" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373ida"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 6.36013 -2.36143 0 12.537 4.844)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#F3A52A" />
    //         <stop offset={1} stopColor="#F3A52A" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373idb"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(2.32995 2.17252 -3.28739 3.5256 10.68 9.032)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#CDA25E" />
    //         <stop offset={1} stopColor="#CDA25E" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2373idc"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(-168.366 7.22 1.513) scale(1.63946 3.57849)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".55" stopColor="#CCB28B" stopOpacity={0} />
    //         <stop offset={1} stopColor="#CCB28B" />
    //       </radialGradient>
    //       <linearGradient
    //         id="f2373idd"
    //         x1="19.254"
    //         x2="9.191"
    //         y1="6.639"
    //         y2="27.827"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFCA44" />
    //         <stop offset={1} stopColor="#F8A528" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373ide"
    //         x1="14.19"
    //         x2="14.19"
    //         y1="25.562"
    //         y2="30.663"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#D8796F" stopOpacity={0} />
    //         <stop offset={1} stopColor="#D8796F" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idf"
    //         x1="20.1"
    //         x2="20.1"
    //         y1="12.157"
    //         y2="25.445"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#D1730B" />
    //         <stop offset={1} stopColor="#E27D47" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idg"
    //         x1="28.867"
    //         x2="28.867"
    //         y1="10.73"
    //         y2="19.774"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFDB44" />
    //         <stop offset={1} stopColor="#F9A928" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idh"
    //         x1="28.488"
    //         x2="28.488"
    //         y1="24.791"
    //         y2="32.876"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFDB44" />
    //         <stop offset={1} stopColor="#F9A928" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idi"
    //         x1="31.904"
    //         x2="30.072"
    //         y1="28.446"
    //         y2="28.446"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#DC7C6A" />
    //         <stop offset={1} stopColor="#DC7C6A" stopOpacity={0} />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idj"
    //         x1="24.713"
    //         x2="18.924"
    //         y1="26.103"
    //         y2="26.103"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF166" />
    //         <stop offset={1} stopColor="#FFF166" stopOpacity={0} />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idk"
    //         x1="29.937"
    //         x2="29.937"
    //         y1="20.625"
    //         y2="29.894"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFDB44" />
    //         <stop offset={1} stopColor="#F9A928" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idl"
    //         x1="25.607"
    //         x2="18.359"
    //         y1="22.233"
    //         y2="22.233"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF166" />
    //         <stop offset={1} stopColor="#FFF166" stopOpacity={0} />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idm"
    //         x1="29.826"
    //         x2="29.826"
    //         y1="15.285"
    //         y2="25.398"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFDB44" />
    //         <stop offset={1} stopColor="#F9A928" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idn"
    //         x1="24.673"
    //         x2="18.059"
    //         y1="12.214"
    //         y2="12.214"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF166" />
    //         <stop offset={1} stopColor="#FFF166" stopOpacity={0} />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373ido"
    //         x1="25.584"
    //         x2="17.853"
    //         y1="16.69"
    //         y2="16.69"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF166" />
    //         <stop offset={1} stopColor="#FFF166" stopOpacity={0} />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2373idp"
    //         x1="17.867"
    //         x2="14.778"
    //         y1="5.305"
    //         y2="5.305"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF166" />
    //         <stop offset={1} stopColor="#FFF166" stopOpacity={0} />
    //       </linearGradient>
    //       <filter
    //         id="f2373idq"
    //         width="19.048"
    //         height="27.809"
    //         x="4.917"
    //         y="1.87"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feColorMatrix
    //           in="SourceAlpha"
    //           result="hardAlpha"
    //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         />
    //         <feOffset dx=".5" />
    //         <feGaussianBlur stdDeviation={1} />
    //         <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
    //         <feColorMatrix values="0 0 0 0 0.847059 0 0 0 0 0.458824 0 0 0 0 0.360784 0 0 0 1 0" />
    //         <feBlend in2="shape" result="effect1_innerShadow_20020_2909" />
    //       </filter>
    //       <filter
    //         id="f2373idr"
    //         width="12.909"
    //         height="20.615"
    //         x="13.646"
    //         y="10.157"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_20020_2909"
    //           stdDeviation={1}
    //         />
    //       </filter>
    //       <filter
    //         id="f2373ids"
    //         width="9.543"
    //         height="5.82"
    //         x="16.913"
    //         y="10.73"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feColorMatrix
    //           in="SourceAlpha"
    //           result="hardAlpha"
    //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         />
    //         <feOffset dx=".5" />
    //         <feGaussianBlur stdDeviation=".75" />
    //         <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
    //         <feColorMatrix values="0 0 0 0 0.878431 0 0 0 0 0.541176 0 0 0 0 0.0627451 0 0 0 1 0" />
    //         <feBlend in2="shape" result="effect1_innerShadow_20020_2909" />
    //       </filter>
    //       <filter
    //         id="f2373idt"
    //         width="9.361"
    //         height="6.164"
    //         x="16.796"
    //         y="23.515"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feColorMatrix
    //           in="SourceAlpha"
    //           result="hardAlpha"
    //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         />
    //         <feOffset dx=".5" dy="-.5" />
    //         <feGaussianBlur stdDeviation=".75" />
    //         <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
    //         <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0" />
    //         <feBlend in2="shape" result="effect1_innerShadow_20020_2909" />
    //       </filter>
    //       <filter
    //         id="f2373idu"
    //         width="7.87"
    //         height="3.976"
    //         x="18.372"
    //         y="24.449"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_20020_2909"
    //           stdDeviation=".625"
    //         />
    //       </filter>
    //       <filter
    //         id="f2373idv"
    //         width="10.659"
    //         height="6.464"
    //         x="16.796"
    //         y="19.235"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feColorMatrix
    //           in="SourceAlpha"
    //           result="hardAlpha"
    //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         />
    //         <feOffset dx=".5" dy="-.5" />
    //         <feGaussianBlur stdDeviation=".75" />
    //         <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
    //         <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0" />
    //         <feBlend in2="shape" result="effect1_innerShadow_20020_2909" />
    //       </filter>
    //       <filter
    //         id="f2373idw"
    //         width="9.225"
    //         height="3.976"
    //         x="17.982"
    //         y="20.579"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_20020_2909"
    //           stdDeviation=".625"
    //         />
    //       </filter>
    //       <filter
    //         id="f2373idx"
    //         width="10.614"
    //         height="6.333"
    //         x="16.796"
    //         y="14.785"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feColorMatrix
    //           in="SourceAlpha"
    //           result="hardAlpha"
    //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         />
    //         <feOffset dx=".5" dy="-.5" />
    //         <feGaussianBlur stdDeviation=".75" />
    //         <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
    //         <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0" />
    //         <feBlend in2="shape" result="effect1_innerShadow_20020_2909" />
    //       </filter>
    //       <filter
    //         id="f2373idy"
    //         width="8.636"
    //         height="5.016"
    //         x="17.606"
    //         y="10.274"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_20020_2909"
    //           stdDeviation=".625"
    //         />
    //       </filter>
    //       <filter
    //         id="f2373idz"
    //         width="9.672"
    //         height="5.016"
    //         x="17.535"
    //         y="14.75"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_20020_2909"
    //           stdDeviation=".625"
    //         />
    //       </filter>
    //       <filter
    //         id="f2373id10"
    //         width="5.365"
    //         height="10.497"
    //         x="13.9"
    //         y="1.862"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_20020_2909"
    //           stdDeviation=".625"
    //         />
    //       </filter>
    //     </defs>
    //   </g>
    // </svg>
  );
};
export const SadIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <img src={cryingFace} height={height} width={width} />

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={size || width || 24}
    //   height={size || height || 24}
    //   {...props}
    //   viewBox="0 0 32 32"
    // >
    //   <g fill="none">
    //     <g clipPath="url(#f2143idh)">
    //       <path
    //         fill="url(#f2143id0)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f2143id1)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f2143id2)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f2143id3)"
    //         fillOpacity=".6"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f2143id4)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f2143id5)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f2143id6)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f2143id7)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <circle cx="9.017" cy="16.421" r="4.673" fill="url(#f2143id8)" />
    //       <circle cx="19.244" cy="16.943" r="4.244" fill="url(#f2143id9)" />
    //       <path
    //         fill="#ffffff"
    //         d="M10.42 19.224a4.206 4.206 0 1 0 0-8.411a4.206 4.206 0 0 0 0 8.411Zm11.148.077a4.244 4.244 0 1 0 0-8.489a4.244 4.244 0 0 0 0 8.49Z"
    //       />
    //       <path fill="url(#f2143idd)" d="M11 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" />
    //       <path fill="url(#f2143ide)" d="M21 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" />
    //       <path
    //         stroke="url(#f2143idf)"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="1.25"
    //         d="M10.5 6.5s-.5 3-4 3"
    //       />
    //       <path
    //         stroke="url(#f2143ida)"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="1.25"
    //         d="M10.5 6.5s-.5 3-4 3"
    //       />
    //       <path
    //         stroke="url(#f2143idb)"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="1.25"
    //         d="M21.5 6.5s.5 3 4 3"
    //       />
    //       <path
    //         stroke="url(#f2143idg)"
    //         strokeLinecap="round"
    //         strokeWidth={2}
    //         d="M13 23s1-1 3-1s3 1 3 1"
    //       />
    //       <rect
    //         width={5}
    //         height={9}
    //         x={1}
    //         y={17}
    //         fill="url(#f2143idc)"
    //         rx="2.5"
    //       />
    //     </g>
    //     <defs>
    //       <radialGradient
    //         id="f2143id0"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(132.839 10.786 10.065) scale(37.5033)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF478" />
    //         <stop offset=".475" stopColor="#FFB02E" />
    //         <stop offset={1} stopColor="#F70A8D" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id1"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(131.878 10.74 10.193) scale(38.9487)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF478" />
    //         <stop offset=".475" stopColor="#FFB02E" />
    //         <stop offset={1} stopColor="#F70A8D" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id2"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(101.31 2.876 12.808) scale(17.8466 22.8581)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".788" stopColor="#F59639" stopOpacity={0} />
    //         <stop offset=".973" stopColor="#FF7DCE" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id3"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-29 29 -29 -29 18 14)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".315" stopOpacity={0} />
    //         <stop offset={1} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id4"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(77.692 -2.555 18.434) scale(28.1469)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".508" stopColor="#7D6133" stopOpacity={0} />
    //         <stop offset={1} stopColor="#715B32" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id5"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFB849" />
    //         <stop offset={1} stopColor="#FFB847" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id6"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(11.49998 2 -2 11.49998 20.5 18)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFA64B" />
    //         <stop offset=".9" stopColor="#FFAE46" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id7"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(43.971 -9.827 29.173) scale(59.0529)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".185" stopOpacity={0} />
    //         <stop offset={1} stopOpacity=".4" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id8"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(135 3.678 9.013) scale(9.10579 4.71285)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#392108" />
    //         <stop offset={1} stopColor="#C87928" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143id9"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(135 8.447 11.49) scale(7.66968 4.32966)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#392108" />
    //         <stop offset={1} stopColor="#C87928" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143ida"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(2.5 3.5 -3.5 2.5 7 6)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".542" stopColor="#493032" />
    //         <stop offset=".807" stopColor="#5E445A" />
    //         <stop offset=".955" stopColor="#4A2C42" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143idb"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(125.538 10.956 9.433) scale(4.30116)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#C2B4B5" />
    //         <stop offset=".887" stopColor="#462B45" />
    //         <stop offset={1} stopColor="#4A2C42" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f2143idc"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(104.88 -4.11 10.691) scale(9.73555 3.6969)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#5C98FF" />
    //         <stop offset=".806" stopColor="#3D5BF1" />
    //         <stop offset=".962" stopColor="#6065CA" />
    //       </radialGradient>
    //       <linearGradient
    //         id="f2143idd"
    //         x1="16.5"
    //         x2="15.5"
    //         y1={11}
    //         y2={18}
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#553B3E" />
    //         <stop offset={1} stopColor="#3D2432" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2143ide"
    //         x1="16.5"
    //         x2="15.5"
    //         y1={11}
    //         y2={18}
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#553B3E" />
    //         <stop offset={1} stopColor="#3D2432" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2143idf"
    //         x1="9.5"
    //         x2="9.5"
    //         y1={6}
    //         y2="7.5"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".03" stopColor="#524049" />
    //         <stop offset={1} stopColor="#4A2C42" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f2143idg"
    //         x1={16}
    //         x2={16}
    //         y1={20}
    //         y2={22}
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#4F3C43" />
    //         <stop offset={1} stopColor="#512756" />
    //       </linearGradient>
    //       <clipPath id="f2143idh">
    //         <path fill="#ffffff" d="M0 0h32v32H0z" />
    //       </clipPath>
    //     </defs>
    //   </g>
    // </svg>
  );
};
export const WowIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <img src={astonishedFace} height={height} width={width} />

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={size || width || 24}
    //   height={size || height || 24}
    //   {...props}
    //   viewBox="0 0 32 32"
    // >
    //   <g fill="none">
    //     <path
    //       fill="url(#f472id0)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f472id1)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f472id2)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f472id3)"
    //       fillOpacity=".6"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f472id4)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f472id5)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f472id6)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f472id7)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <circle cx={9} cy={13} r={5} fill="url(#f472id8)" />
    //     <circle cx="19.5" cy="13.5" r="4.5" fill="url(#f472id9)" />
    //     <path
    //       fill="#ffffff"
    //       d="M10.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z"
    //     />
    //     <path fill="url(#f472idb)" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
    //     <path fill="url(#f472idc)" d="M20 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
    //     <rect width={8} height={10} x={12} y={18} fill="url(#f472ida)" rx={4} />
    //     <defs>
    //       <radialGradient
    //         id="f472id0"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(132.839 10.786 10.065) scale(37.5033)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF478" />
    //         <stop offset=".475" stopColor="#FFB02E" />
    //         <stop offset={1} stopColor="#F70A8D" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id1"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(131.878 10.74 10.193) scale(38.9487)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF478" />
    //         <stop offset=".475" stopColor="#FFB02E" />
    //         <stop offset={1} stopColor="#F70A8D" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id2"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(101.31 2.876 12.808) scale(17.8466 22.8581)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".788" stopColor="#F59639" stopOpacity={0} />
    //         <stop offset=".973" stopColor="#FF7DCE" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id3"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-29 29 -29 -29 18 14)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".315" stopOpacity={0} />
    //         <stop offset={1} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id4"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(77.692 -2.555 18.434) scale(28.1469)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".508" stopColor="#7D6133" stopOpacity={0} />
    //         <stop offset={1} stopColor="#715B32" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id5"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFB849" />
    //         <stop offset={1} stopColor="#FFB847" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id6"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(11.49998 2 -2 11.49998 20.5 18)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFA64B" />
    //         <stop offset=".9" stopColor="#FFAE46" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id7"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(43.971 -9.827 29.173) scale(59.0529)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".185" stopOpacity={0} />
    //         <stop offset={1} stopOpacity=".4" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id8"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(135 4.557 7.225) scale(9.74236 5.04232)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#392108" />
    //         <stop offset={1} stopColor="#C87928" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472id9"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-5.75 5.75 -3.24597 -3.24597 23 10)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#392108" />
    //         <stop offset={1} stopColor="#C87928" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f472ida"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 -12.2222 9.77778 0 16 30.222)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#F70A8D" />
    //         <stop offset={1} stopColor="#89029C" />
    //       </radialGradient>
    //       <linearGradient
    //         id="f472idb"
    //         x1="20.615"
    //         x2="19.927"
    //         y1={10}
    //         y2="14.03"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#553B3E" />
    //         <stop offset={1} stopColor="#3D2432" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f472idc"
    //         x1="20.615"
    //         x2="19.927"
    //         y1={10}
    //         y2="14.03"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#553B3E" />
    //         <stop offset={1} stopColor="#3D2432" />
    //       </linearGradient>
    //     </defs>
    //   </g>
    // </svg>
  );
};
export const LaughIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <img src={grinningSquintingFace} height={height} width={width} />
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={size || width || 24}
    //   height={size || height || 24}
    //   {...props}
    //   viewBox="0 0 32 32"
    // >
    //   <g fill="none">
    //     <path
    //       fill="url(#f627id0)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f627id1)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f627id2)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f627id3)"
    //       fillOpacity=".6"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f627id4)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f627id5)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f627id6)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path
    //       fill="url(#f627id7)"
    //       d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //     />
    //     <path fill="url(#f627id8)" d="M16 26C6 26 6 16 6 16h20s0 10-10 10Z" />
    //     <path
    //       fill="url(#f627idd)"
    //       d="M23.5 17.5h-15A1.5 1.5 0 0 1 7 16h18a1.5 1.5 0 0 1-1.5 1.5Z"
    //     />
    //     <g fillOpacity=".6" filter="url(#f627idi)">
    //       <path
    //         fill="url(#f627id9)"
    //         d="M9.447 14.328a1 1 0 1 1-.894-1.79l2.206-1.103H14a1 1 0 0 1-.553.893l-4 2Z"
    //       />
    //       <path
    //         fill="url(#f627ida)"
    //         d="M9.447 8.543a1 1 0 0 0-.894 1.79l2.206 1.102H14a1 1 0 0 0-.553-.892l-4-2Z"
    //       />
    //     </g>
    //     <path
    //       fill="url(#f627ide)"
    //       d="M9.447 13.89a1 1 0 1 1-.894-1.789l2.206-1.103H14a1 1 0 0 1-.553.892l-4 2Z"
    //     />
    //     <path
    //       fill="url(#f627idf)"
    //       d="M9.447 8.106a1 1 0 0 0-.894 1.789l2.206 1.103H14a1 1 0 0 0-.553-.892l-4-2Z"
    //     />
    //     <g filter="url(#f627idj)">
    //       <path
    //         fill="url(#f627idb)"
    //         d="M21.959 14.328a1 1 0 0 0 .895-1.79l-2.207-1.103h-3.24a1 1 0 0 0 .552.893l4 2Z"
    //       />
    //       <path
    //         fill="url(#f627idc)"
    //         d="M21.959 8.543a1 1 0 0 1 .895 1.79l-2.207 1.102h-3.24a1 1 0 0 1 .552-.892l4-2Z"
    //       />
    //     </g>
    //     <path
    //       fill="url(#f627idg)"
    //       d="M22.537 13.89a1 1 0 1 0 .895-1.789l-2.207-1.103h-3.24a1 1 0 0 0 .552.892l4 2Z"
    //     />
    //     <path
    //       fill="url(#f627idh)"
    //       d="M22.537 8.106a1 1 0 0 1 .895 1.789l-2.207 1.103h-3.24a1 1 0 0 1 .552-.892l4-2Z"
    //     />
    //     <defs>
    //       <radialGradient
    //         id="f627id0"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(132.839 10.786 10.065) scale(37.5033)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF478" />
    //         <stop offset=".475" stopColor="#FFB02E" />
    //         <stop offset={1} stopColor="#F70A8D" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id1"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(131.878 10.74 10.193) scale(38.9487)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF478" />
    //         <stop offset=".475" stopColor="#FFB02E" />
    //         <stop offset={1} stopColor="#F70A8D" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id2"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(101.31 2.876 12.808) scale(17.8466 22.8581)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".788" stopColor="#F59639" stopOpacity={0} />
    //         <stop offset=".973" stopColor="#FF7DCE" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id3"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-29 29 -29 -29 18 14)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".315" stopOpacity={0} />
    //         <stop offset={1} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id4"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(77.692 -2.555 18.434) scale(28.1469)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".508" stopColor="#7D6133" stopOpacity={0} />
    //         <stop offset={1} stopColor="#715B32" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id5"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFB849" />
    //         <stop offset={1} stopColor="#FFB847" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id6"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(11.49998 2 -2 11.49998 20.5 18)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFA64B" />
    //         <stop offset=".9" stopColor="#FFAE46" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id7"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(43.971 -9.827 29.173) scale(59.0529)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".185" stopOpacity={0} />
    //         <stop offset={1} stopOpacity=".4" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id8"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(0 -12.2222 24.4444 0 16 28.222)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#F70A8D" />
    //         <stop offset={1} stopColor="#89029C" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627id9"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-2.62502 7.125 -9.31237 -3.4309 9.781 8.438)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#9F5E0F" />
    //         <stop offset=".889" stopColor="#9F5E0F" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627ida"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-2.62502 7.125 -9.31237 -3.4309 9.781 8.438)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#9F5E0F" />
    //         <stop offset=".889" stopColor="#9F5E0F" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627idb"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(-135.995 16.533 2.298) scale(13.3597 17.4611)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#E9830A" />
    //         <stop offset=".802" stopColor="#F08B13" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f627idc"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(-135.995 16.533 2.298) scale(13.3597 17.4611)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#E9830A" />
    //         <stop offset=".802" stopColor="#F08B13" stopOpacity={0} />
    //       </radialGradient>
    //       <linearGradient
    //         id="f627idd"
    //         x1={16}
    //         x2={16}
    //         y1={16}
    //         y2="17.5"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#ECCDFF" />
    //         <stop offset={1} stopColor="#fff" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f627ide"
    //         x1="10.578"
    //         x2={8}
    //         y1="14.732"
    //         y2="9.388"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".25" stopColor="#482641" />
    //         <stop offset=".406" stopColor="#503A4A" />
    //         <stop offset=".511" stopColor="#482641" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f627idf"
    //         x1="8.86"
    //         x2="11.25"
    //         y1="11.139"
    //         y2="6.451"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".25" stopColor="#482641" />
    //         <stop offset=".406" stopColor="#503A4A" />
    //         <stop offset=".511" stopColor="#482641" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f627idg"
    //         x1="21.406"
    //         x2="23.985"
    //         y1="14.732"
    //         y2="9.388"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".25" stopColor="#482641" />
    //         <stop offset=".406" stopColor="#503A4A" />
    //         <stop offset=".511" stopColor="#482641" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f627idh"
    //         x1="23.125"
    //         x2="20.734"
    //         y1="11.139"
    //         y2="6.451"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".25" stopColor="#482641" />
    //         <stop offset=".406" stopColor="#503A4A" />
    //         <stop offset=".511" stopColor="#482641" />
    //       </linearGradient>
    //       <filter
    //         id="f627idi"
    //         width={7}
    //         height="6.996"
    //         x="7.5"
    //         y="7.938"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_23_362"
    //           stdDeviation=".25"
    //         />
    //       </filter>
    //       <filter
    //         id="f627idj"
    //         width={7}
    //         height="6.996"
    //         x="16.906"
    //         y="7.938"
    //         colorInterpolationFilters="sRGB"
    //         filterUnits="userSpaceOnUse"
    //       >
    //         <feFlood floodOpacity={0} result="BackgroundImageFix" />
    //         <feBlend
    //           in="SourceGraphic"
    //           in2="BackgroundImageFix"
    //           result="shape"
    //         />
    //         <feGaussianBlur
    //           result="effect1_foregroundBlur_23_362"
    //           stdDeviation=".25"
    //         />
    //       </filter>
    //     </defs>
    //   </g>
    // </svg>
  );
};
export const AngeryIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <img src={angryFace} height={height} width={width} />
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={size || width || 24}
    //   height={size || height || 24}
    //   {...props}
    //   viewBox="0 0 32 32"
    // >
    //   <g fill="none">
    //     <g clipPath="url(#f23idf)">
    //       <path
    //         fill="url(#f23id0)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f23id1)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f23id2)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f23id3)"
    //         fillOpacity=".6"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f23id4)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f23id5)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f23id6)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <path
    //         fill="url(#f23id7)"
    //         d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999c0 7.731 4.664 13.999 13.999 13.999Z"
    //       />
    //       <circle cx={9} cy={18} r={5} fill="url(#f23id8)" />
    //       <circle cx="19.5" cy="18.5" r="4.5" fill="url(#f23id9)" />
    //       <path
    //         fill="#ffffff"
    //         d="M10.5 21a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z"
    //       />
    //       <path fill="url(#f23ida)" d="M12 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
    //       <path fill="url(#f23idb)" d="M20 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
    //       <path
    //         stroke="url(#f23idc)"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="1.5"
    //         d="M10.25 10.25s.75 3 4 3"
    //       />
    //       <path
    //         stroke="url(#f23idd)"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="1.5"
    //         d="M21.75 10.25s-.75 3-4 3"
    //       />
    //       <path
    //         stroke="url(#f23ide)"
    //         strokeLinecap="round"
    //         strokeWidth={2}
    //         d="M12 25c.333-.667 1.6-2 4-2s3.667 1.333 4 2"
    //       />
    //     </g>
    //     <defs>
    //       <radialGradient
    //         id="f23id0"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(132.839 10.786 10.065) scale(37.5033)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF478" />
    //         <stop offset=".475" stopColor="#FFB02E" />
    //         <stop offset={1} stopColor="#F70A8D" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id1"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(131.878 10.74 10.193) scale(38.9487)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFF478" />
    //         <stop offset=".475" stopColor="#FFB02E" />
    //         <stop offset={1} stopColor="#F70A8D" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id2"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(101.31 2.876 12.808) scale(17.8466 22.8581)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".788" stopColor="#F59639" stopOpacity={0} />
    //         <stop offset=".973" stopColor="#FF7DCE" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id3"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-29 29 -29 -29 18 14)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".315" stopOpacity={0} />
    //         <stop offset={1} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id4"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(77.692 -2.555 18.434) scale(28.1469)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".508" stopColor="#7D6133" stopOpacity={0} />
    //         <stop offset={1} stopColor="#715B32" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id5"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFB849" />
    //         <stop offset={1} stopColor="#FFB847" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id6"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(11.49998 2 -2 11.49998 20.5 18)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#FFA64B" />
    //         <stop offset=".9" stopColor="#FFAE46" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id7"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(43.971 -9.827 29.173) scale(59.0529)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".185" stopOpacity={0} />
    //         <stop offset={1} stopOpacity=".4" />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id8"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="rotate(135 3.522 9.725) scale(9.74236 5.04232)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#392108" />
    //         <stop offset={1} stopColor="#C87928" stopOpacity={0} />
    //       </radialGradient>
    //       <radialGradient
    //         id="f23id9"
    //         cx={0}
    //         cy={0}
    //         r={1}
    //         gradientTransform="matrix(-5.75 5.75 -3.24597 -3.24597 23 15)"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#392108" />
    //         <stop offset={1} stopColor="#C87928" stopOpacity={0} />
    //       </radialGradient>
    //       <linearGradient
    //         id="f23ida"
    //         x1="20.615"
    //         x2="19.927"
    //         y1={15}
    //         y2="19.03"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#553B3E" />
    //         <stop offset={1} stopColor="#3D2432" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f23idb"
    //         x1="20.615"
    //         x2="19.927"
    //         y1={15}
    //         y2="19.03"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#553B3E" />
    //         <stop offset={1} stopColor="#3D2432" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f23idc"
    //         x1="11.5"
    //         x2="11.5"
    //         y1={10}
    //         y2="11.5"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".03" stopColor="#524049" />
    //         <stop offset={1} stopColor="#4A2C42" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f23idd"
    //         x1="20.5"
    //         x2="20.5"
    //         y1={10}
    //         y2="11.5"
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop offset=".03" stopColor="#524049" />
    //         <stop offset={1} stopColor="#4A2C42" />
    //       </linearGradient>
    //       <linearGradient
    //         id="f23ide"
    //         x1={16}
    //         x2={16}
    //         y1={22}
    //         y2={24}
    //         gradientUnits="userSpaceOnUse"
    //       >
    //         <stop stopColor="#4F3C43" />
    //         <stop offset={1} stopColor="#512756" />
    //       </linearGradient>
    //       <clipPath id="f23idf">
    //         <path fill="#ffffff" d="M0 0h32v32H0z" />
    //       </clipPath>
    //     </defs>
    //   </g>
    // </svg>
  );
};
