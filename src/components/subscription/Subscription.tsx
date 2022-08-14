import React from 'react';
import s from './subscription.module.scss';

const Subscription = () => {
    return (
        <div className={s.subscriptionContainer}>
            <div className={s.socialSubscriptionWrapper}>
                <div className={s.socialWrapper}>
                    <h5 className={s.title}>СОЦСЕТИ</h5>
                    <div className={s.social}>
                        <a className={s.socialIconItems} href="/">
                            <svg className={s.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.489 0.00348828L10.218 0.000488281H13.782L14.512 0.00348828L15.426 0.0134883L15.859 0.0204883L16.277 0.0314883L16.68 0.0454883L17.068 0.0614883L17.442 0.0824883L17.802 0.107488L18.147 0.137488L18.48 0.170488C20.22 0.366488 21.413 0.786488 22.313 1.68649C23.213 2.58649 23.633 3.77849 23.829 5.51949L23.863 5.85249L23.892 6.19849L23.917 6.55849L23.937 6.93149L23.962 7.51949L23.974 7.92949L23.987 8.57349L23.996 9.48849L24 10.4685L23.999 13.7815L23.996 14.5115L23.986 15.4255L23.979 15.8585L23.968 16.2765L23.954 16.6795L23.938 17.0675L23.917 17.4415L23.892 17.8015L23.862 18.1465L23.829 18.4795C23.633 20.2195 23.213 21.4125 22.313 22.3125C21.413 23.2125 20.221 23.6325 18.48 23.8285L18.147 23.8625L17.801 23.8915L17.441 23.9165L17.068 23.9365L16.48 23.9615L16.07 23.9735L15.426 23.9865L14.511 23.9955L13.531 23.9995L10.218 23.9985L9.488 23.9955L8.574 23.9855L8.141 23.9785L7.723 23.9675L7.32 23.9535L6.932 23.9375L6.558 23.9165L6.198 23.8915L5.853 23.8615L5.52 23.8285C3.78 23.6325 2.587 23.2125 1.687 22.3125C0.787 21.4125 0.367 20.2205 0.171 18.4795L0.137 18.1465L0.108 17.8005L0.083 17.4405L0.063 17.0675L0.038 16.4795L0.026 16.0695L0.013 15.4255L0.004 14.5105L0 13.5305L0.001 10.2175L0.004 9.48749L0.014 8.57349L0.021 8.14049L0.032 7.72249L0.046 7.31949L0.062 6.93149L0.083 6.55749L0.108 6.19749L0.138 5.85249L0.171 5.51949C0.367 3.77949 0.787 2.58649 1.687 1.68649C2.587 0.786488 3.779 0.366488 5.52 0.170488L5.853 0.136488L6.199 0.107488L6.559 0.0824883L6.932 0.0624883L7.52 0.0374883L7.93 0.0254883L8.574 0.0124883L9.489 0.00348828ZM6.79 7.29949H4.05C4.18 13.5395 7.3 17.2895 12.77 17.2895H13.08V13.7195C15.09 13.9195 16.61 15.3895 17.22 17.2895H20.06C19.28 14.4495 17.23 12.8795 15.95 12.2795C17.23 11.5395 19.03 9.73949 19.46 7.29949H16.88C16.32 9.27949 14.66 11.0795 13.08 11.2495V7.29949H10.5V14.2195C8.9 13.8195 6.88 11.8795 6.79 7.29949Z" fill="white"/>
                            </svg>
                        </a>
                        <a className={s.socialIconItems} href="/">
                            <svg className={s.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.0725C24 5.44551 18.627 0.0725098 12 0.0725098C5.373 0.0725098 0 5.44551 0 12.0725C0 18.0625 4.388 23.0265 10.125 23.9265V15.5415H7.078V12.0715H10.125V9.42951C10.125 6.42251 11.917 4.76051 14.658 4.76051C15.97 4.76051 17.344 4.99551 17.344 4.99551V7.94851H15.83C14.339 7.94851 13.874 8.87351 13.874 9.82251V12.0725H17.202L16.67 15.5425H13.874V23.9275C19.612 23.0265 24 18.0615 24 12.0725Z" fill="white"/>
                            </svg>
                        </a>
                        <a className={s.socialIconItems} href="/">
                            <svg className={s.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.611 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.199 4.155 19.846 4.801 19.846 5.595Z" fill="white"/>
                            </svg>
                        </a>
                        <a className={s.socialIconItems} href="/">
                            <svg className={s.socialIcon} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.498 3.18598C23.3624 2.67526 23.095 2.20912 22.7226 1.83425C22.3502 1.45937 21.8858 1.18892 21.376 1.04998C19.505 0.544983 12 0.544983 12 0.544983C12 0.544983 4.495 0.544983 2.623 1.04998C2.11341 1.18917 1.64929 1.45972 1.27708 1.83456C0.904861 2.20941 0.637591 2.67542 0.502 3.18598C0 5.06998 0 8.99998 0 8.99998C0 8.99998 0 12.93 0.502 14.814C0.637586 15.3247 0.904975 15.7908 1.27739 16.1657C1.64981 16.5406 2.11418 16.811 2.624 16.95C4.495 17.455 12 17.455 12 17.455C12 17.455 19.505 17.455 21.377 16.95C21.8869 16.8111 22.3513 16.5407 22.7237 16.1658C23.0961 15.7909 23.3635 15.3248 23.499 14.814C24 12.93 24 8.99998 24 8.99998C24 8.99998 24 5.06998 23.498 3.18598ZM9.545 12.568V5.43198L15.818 8.99998L9.545 12.568Z" fill="white"/>
                            </svg>

                        </a>
                        <a className={s.socialIconItems} href="/">
                            <svg className={s.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.944 3.26667e-05C8.77112 0.0148396 5.73324 1.28566 3.4949 3.53449C1.25656 5.78332 -3.4549e-05 8.82711 7.12435e-10 12C7.12441e-10 15.1826 1.26428 18.2349 3.51472 20.4853C5.76515 22.7358 8.8174 24 12 24C15.1826 24 18.2348 22.7358 20.4853 20.4853C22.7357 18.2349 24 15.1826 24 12C24 8.81743 22.7357 5.76519 20.4853 3.51475C18.2348 1.26431 15.1826 3.26667e-05 12 3.26667e-05C11.9813 -1.08889e-05 11.9627 -1.08889e-05 11.944 3.26667e-05ZM16.906 7.22403C17.006 7.22203 17.227 7.24703 17.371 7.36403C17.4667 7.44713 17.5277 7.56311 17.542 7.68903C17.558 7.78203 17.578 7.99503 17.562 8.16103C17.382 10.059 16.6 14.663 16.202 16.788C16.034 17.688 15.703 17.989 15.382 18.018C14.686 18.083 14.157 17.558 13.482 17.116C12.426 16.423 11.829 15.992 10.804 15.316C9.619 14.536 10.387 14.106 11.062 13.406C11.239 13.222 14.309 10.429 14.369 10.176C14.376 10.144 14.383 10.026 14.313 9.96403C14.243 9.90203 14.139 9.92303 14.064 9.94003C13.958 9.96403 12.271 11.08 9.003 13.285C8.523 13.615 8.09 13.775 7.701 13.765C7.273 13.757 6.449 13.524 5.836 13.325C5.084 13.08 4.487 12.951 4.539 12.536C4.566 12.32 4.864 12.099 5.432 11.873C8.93 10.349 11.262 9.34403 12.43 8.85903C15.762 7.47303 16.455 7.23203 16.906 7.22403Z" fill="white"/>
                            </svg>

                        </a>
                        <a className={s.socialIconItems} href="/">
                            <svg className={s.socialIcon} width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5256 0.0198779C12.8356 -0.00012207 14.1356 0.00987793 15.4356 -0.00012207C15.5156 1.52988 16.0656 3.08988 17.1856 4.16988C18.3056 5.27988 19.8856 5.78988 21.4256 5.95988V9.98988C19.9856 9.93988 18.5356 9.63988 17.2256 9.01988C16.6556 8.75988 16.1256 8.42988 15.6056 8.08988C15.5956 11.0099 15.6156 13.9299 15.5856 16.8399C15.5056 18.2399 15.0456 19.6299 14.2356 20.7799C12.9256 22.6999 10.6556 23.9499 8.32561 23.9899C6.89561 24.0699 5.46561 23.6799 4.24561 22.9599C2.22561 21.7699 0.805609 19.5899 0.595609 17.2499C0.575609 16.7499 0.565609 16.2499 0.585609 15.7599C0.765609 13.8599 1.70561 12.0399 3.16561 10.7999C4.82561 9.35988 7.14561 8.66988 9.31561 9.07988C9.33561 10.5599 9.27561 12.0399 9.27561 13.5199C8.28561 13.1999 7.12561 13.2899 6.25561 13.8899C5.62561 14.2999 5.14561 14.9299 4.89561 15.6399C4.68561 16.1499 4.74561 16.7099 4.75561 17.2499C4.99561 18.8899 6.57561 20.2699 8.25561 20.1199C9.37561 20.1099 10.4456 19.4599 11.0256 18.5099C11.2156 18.1799 11.4256 17.8399 11.4356 17.4499C11.5356 15.6599 11.4956 13.8799 11.5056 12.0899C11.5156 8.05988 11.4956 4.03988 11.5256 0.0198779Z" fill="white"/>
                            </svg>
                        </a>
                        <a className={s.socialIconItems} href="/">
                            <svg className={s.socialIcon} width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.953 2.57027C23.0545 2.96588 22.1026 3.22701 21.128 3.34527C22.1541 2.72852 22.9224 1.76132 23.291 0.62227C22.34 1.17727 21.286 1.58127 20.164 1.80627C19.4238 1.0147 18.4429 0.489692 17.3736 0.312772C16.3044 0.135852 15.2067 0.316921 14.2509 0.827861C13.2952 1.3388 12.5349 2.15102 12.0881 3.13839C11.6412 4.12577 11.533 5.23304 11.78 6.28827C7.69 6.09527 4.067 4.13027 1.64 1.16227C1.19879 1.91208 0.968664 2.7673 0.974 3.63727C0.974 5.34727 1.844 6.85027 3.162 7.73327C2.38086 7.70841 1.61697 7.49721 0.934 7.11727V7.17727C0.933557 8.31366 1.32627 9.41521 2.04551 10.295C2.76474 11.1748 3.76621 11.7787 4.88 12.0043C4.1583 12.1977 3.40241 12.2267 2.668 12.0893C2.98412 13.0673 3.59766 13.9222 4.42301 14.5348C5.24837 15.1473 6.24435 15.487 7.272 15.5063C5.53153 16.8722 3.38248 17.6136 1.17 17.6113C0.78 17.6113 0.391 17.5883 0 17.5443C2.25571 18.9886 4.87851 19.7553 7.557 19.7533C16.61 19.7533 21.555 12.2573 21.555 5.76827C21.555 5.55827 21.555 5.34827 21.54 5.13827C22.506 4.44313 23.3392 3.58009 24 2.59027L23.953 2.57027Z" fill="white"/>
                            </svg>
                        </a>
                    </div>

                </div>
                <div className={s.subscriptionWrapper}>
                    <h5 className={s.title}>ПОДПИСКА</h5>
                    <div className={s.subscription}>
                        <input type="text" placeholder="Введите ваш email"/>
                        <button>Подписаться</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscription;