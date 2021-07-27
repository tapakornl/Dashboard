import styled from "styled-components";

const Notification = () => {
  return (
    <>
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor:'pointer'}}>
        <path d="M21.078 25.575L20.1499 24.1406C18.5468 21.7781 17.703 18.9938 17.703 16.125C17.703 13.0875 15.678 10.6406 12.978 9.79688C12.7249 9.0375 11.9655 8.53125 11.1218 8.53125C10.278 8.53125 9.51863 9.0375 9.2655 9.79688C6.5655 10.6406 4.5405 13.0875 4.5405 16.125C4.5405 18.9938 3.69675 21.7781 2.09363 24.1406L1.1655 25.575C0.743629 26.25 1.1655 27.0938 2.00925 27.0938H20.2343C21.078 27.0938 21.4999 26.25 21.078 25.575Z" stroke="#397CDD" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.4967 27.0938C14.4967 28.95 12.978 30.4688 11.1217 30.4688C9.26545 30.4688 7.7467 28.95 7.7467 27.0938" stroke="#397CDD" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="18.6217" cy="9" r="9" fill="url(#paint0_linear)" />
        <circle cx="18.6217" cy="9" r="8.5" stroke="white" stroke-opacity="0.5" />
        <path d="M16.1074 13H21.0674V11.76H19.4674C19.1174 11.76 18.6274 11.8 18.2574 11.84C19.6074 10.52 20.7174 9.08 20.7174 7.74C20.7174 6.36 19.7874 5.46 18.3874 5.46C17.3774 5.46 16.7174 5.85 16.0374 6.58L16.8374 7.38C17.2174 6.97 17.6574 6.62 18.1974 6.62C18.9074 6.62 19.3074 7.07 19.3074 7.82C19.3074 8.96 18.1174 10.35 16.1074 12.15V13Z" fill="white" />
        <defs>
          <linearGradient id="paint0_linear" x1="13.1217" y1="2.5" x2="22.6217" y2="15.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EF4337" />
            <stop offset="1" stop-color="#EF4337" stop-opacity="0.73" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default Notification