import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import Flip from 'gsap-trial/Flip'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(Flip)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        flip: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M2951 4044 c-39 -33 -41 -71 -4 -114 23 -28 31 -31 61 -27 64 11 91
            56 68 112 -25 59 -75 71 -125 29z m98 -20 c28 -36 26 -58 -5 -83 -35 -27 -69
            -27 -88 1 -51 72 39 150 93 82z"
          />
          <path
            ref={outlineLogoRef}
            d="M3055 3896 c-39 -17 -74 -56 -84 -92 -18 -65 46 -175 109 -187 44 -9
            101 12 142 53 32 32 38 44 38 80 0 88 -60 160 -133 160 -23 -1 -55 -7 -72 -14z
            m126 -19 c32 -24 59 -81 59 -125 0 -36 -6 -49 -31 -73 -41 -38 -101 -55 -140
            -38 -58 23 -97 109 -78 166 20 62 142 107 190 70z"
          />
          <path
            ref={outlineLogoRef}
            d="M3205 3622 c-84 -40 -125 -103 -125 -189 1 -186 218 -275 349 -144
            93 93 70 256 -46 324 -48 28 -129 32 -178 9z m161 -22 c56 -28 97 -89 102
            -155 4 -66 -27 -129 -86 -170 -117 -81 -282 8 -284 153 -1 143 141 233 268
            172z"
          />
          <path
            ref={outlineLogoRef}
            d="M1810 2071 c-14 -4 -39 -15 -55 -24 -124 -64 -140 -239 -32 -334 80
            -70 188 -68 267 3 131 119 62 334 -115 357 -22 3 -51 2 -65 -2z m92 -21 c85
            -24 143 -108 136 -196 -12 -144 -168 -220 -288 -140 -130 86 -96 290 56 336
            40 11 53 11 96 0z"
          />
          <path
            ref={outlineLogoRef}
            d="M1989 1676 c-127 -46 -153 -154 -59 -248 31 -32 44 -38 79 -38 84 0
            161 65 161 135 0 17 -10 51 -22 75 -38 73 -94 100 -159 76z m85 -21 c40 -19
            76 -80 76 -128 0 -93 -141 -157 -206 -92 -80 80 -64 176 36 219 45 19 55 19
            94 1z"
          />
          <path
            ref={outlineLogoRef}
            d="M2105 1391 c-11 -5 -28 -18 -39 -29 -24 -27 -15 -80 19 -112 31 -29
            85 -21 115 17 28 36 25 69 -9 104 -30 30 -50 34 -86 20z m61 -19 c15 -10 34
            -47 34 -66 0 -22 -40 -56 -66 -56 -29 0 -64 37 -64 66 0 43 62 79 96 56z"
          />
          <path
            ref={outlineLogoRef}
            d="M1815 3513 c-179 -40 -359 -151 -460 -285 -58 -76 -116 -197 -141
            -293 -25 -96 -25 -265 0 -365 21 -83 269 -585 298 -604 13 -8 44 4 140 54 155
            80 178 98 214 162 24 44 29 65 29 124 0 70 -3 77 -80 235 -72 146 -80 168 -79
            218 1 126 99 221 226 221 65 0 125 -26 162 -70 15 -19 77 -133 138 -254 269
            -540 325 -630 451 -723 116 -85 264 -143 407 -158 140 -15 326 33 465 119 89
            56 210 182 258 267 104 186 128 415 65 609 -29 90 -266 560 -286 567 -24 10
            -258 -114 -308 -163 -54 -53 -78 -124 -72 -208 5 -51 18 -87 83 -215 77 -154
            77 -155 73 -222 -3 -56 -9 -76 -34 -111 -83 -120 -258 -131 -352 -24 -18 21
            -110 191 -204 379 -191 383 -229 447 -314 530 -152 149 -326 218 -546 216 -62
            -1 -122 -3 -133 -6z m315 -30 c90 -21 237 -93 307 -151 82 -69 137 -144 218
            -301 l70 -137 -63 49 c-75 56 -133 87 -222 117 -92 31 -294 39 -410 16 -99
            -21 -120 -30 -120 -56 0 -13 -12 -25 -36 -35 -19 -8 -49 -25 -67 -37 -19 -14
            -42 -21 -62 -20 -26 3 -40 -6 -96 -65 -124 -128 -189 -264 -211 -438 -11 -89
            -4 -206 17 -305 11 -48 -185 346 -210 425 -91 280 15 615 254 799 186 143 406
            192 631 139z m1498 -220 c61 -146 70 -377 18 -528 -15 -44 -45 -111 -67 -148
            -48 -81 -154 -197 -180 -197 -20 0 -24 10 -10 25 17 19 33 87 33 137 -1 44
            -13 77 -83 220 -81 166 -82 168 -77 231 6 68 32 129 72 166 26 24 242 140 262
            141 6 0 21 -21 32 -47z m253 -474 c85 -232 47 -478 -108 -697 -142 -201 -444
            -330 -683 -293 -96 15 -225 60 -296 102 -136 82 -225 190 -329 399 -51 103
            -54 112 -29 89 81 -74 211 -140 322 -165 57 -13 106 -15 211 -11 162 6 254 29
            259 65 2 15 16 27 38 37 19 8 49 25 67 37 19 14 42 21 62 19 27 -2 40 7 97 68
            80 84 138 179 174 286 42 123 46 352 7 474 -14 47 184 -345 208 -410z m-1451
            251 c114 -39 229 -109 296 -182 17 -18 80 -127 139 -243 59 -115 121 -225 138
            -244 42 -44 101 -71 160 -71 33 0 47 -4 47 -14 0 -43 -305 -72 -442 -42 -123
            27 -246 94 -341 185 -40 38 -68 84 -153 253 -57 114 -117 222 -134 242 -41 46
            -105 76 -163 76 -61 0 -65 24 -6 40 93 25 130 29 259 26 107 -3 149 -8 200
            -26z m-692 -177 c-14 -30 -22 -69 -22 -104 -1 -51 7 -73 77 -215 87 -180 98
            -222 73 -308 -23 -79 -68 -120 -213 -194 l-121 -62 -25 63 c-88 221 -65 490
            58 683 48 74 153 184 176 184 17 0 16 -3 -3 -47z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
