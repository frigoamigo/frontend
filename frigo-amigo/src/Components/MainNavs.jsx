import React, { useState, useEffect } from 'react';

const MainNavs = ({ refs }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;

      const blockRefs = [
        refs.mainRef,
        refs.downloadAppRef,
        refs.recipesRef,
        refs.premiumRef,
        refs.footerRef,
      ];

      let activeTabId = -1;

      blockRefs.forEach((ref, index) => {
        const rect = ref.current.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          activeTabId = index + 1;
        }
      });

      if (activeTabId !== -1 && activeTab !== activeTabId) {
        setActiveTab(activeTabId);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling, activeTab, refs]);

  const handleTabClick = (tabId) => {
    if (scrolling) return;

    setScrolling(true);

    setActiveTab(tabId);

    switch (tabId) {
      case 1:
        refs.mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 2:
        refs.downloadAppRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 3:
        refs.recipesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 4:
        refs.premiumRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 5:
        refs.footerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      default:
        break;
    }

    setTimeout(() => {
      setScrolling(false);
    }, 500);
  };

  return (
    <div className="container">
      <div className="navs">
        <button
          className={`navs-item profile ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <p className="navs-link">Профиль</p>
        </button>
        <button
          className={`navs-item download ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <p className="navs-link">Скачать</p>
        </button>
        <button
          className={`navs-item recepies ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          <p className="navs-link">Рецепты</p>
        </button>
        <button
          className={`navs-item premium ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          <svg
            className="prem-stars"
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.8053 23.2689C17.8786 25.8319 17.4152 27.1134 16.7364 27.4751C16.1485 27.7883 15.4433 27.7883 14.8555 27.4751C14.1766 27.1134 13.7133 25.8319 12.7866 23.269L12.3086 21.9468C12.1128 21.4053 12.0149 21.1345 11.8548 20.9106C11.713 20.7122 11.5361 20.5414 11.3329 20.4066C11.1035 20.2545 10.8295 20.1661 10.2815 19.9894L9.44311 19.719C6.57897 18.7953 5.1469 18.3334 4.76409 17.6385C4.43312 17.0377 4.43312 16.3092 4.76409 15.7084C5.1469 15.0136 6.57897 14.5517 9.44311 13.628L10.2815 13.3576C10.8295 13.1808 11.1035 13.0925 11.3329 12.9403C11.5361 12.8056 11.713 12.6348 11.8548 12.4364C12.0149 12.2124 12.1128 11.9417 12.3086 11.4001L12.7866 10.078C13.7133 7.51506 14.1766 6.23359 14.8555 5.8719C15.4433 5.5587 16.1485 5.5587 16.7364 5.8719C17.4152 6.23359 17.8786 7.51506 18.8053 10.078L19.2833 11.4001C19.4791 11.9417 19.577 12.2124 19.7371 12.4364C19.8788 12.6348 20.0557 12.8056 20.2589 12.9403C20.4884 13.0925 20.7624 13.1808 21.3104 13.3576L22.1487 13.628C25.0129 14.5517 26.445 15.0135 26.8278 15.7084C27.1587 16.3092 27.1587 17.0377 26.8278 17.6385C26.445 18.3334 25.0129 18.7953 22.1488 19.719L21.3104 19.9894C20.7624 20.1661 20.4884 20.2545 20.2589 20.4066C20.0557 20.5414 19.8788 20.7122 19.7371 20.9106C19.577 21.1345 19.4791 21.4053 19.2833 21.9468L18.8053 23.2689Z"
              fill="#EC9A29"
            />
            <path
              d="M28.1267 34.5614C27.4829 36.3794 27.161 37.2884 26.7708 37.6319C26.0153 38.2971 24.8831 38.2971 24.1275 37.6319C23.7374 37.2884 23.4155 36.3794 22.7717 34.5614C22.6528 34.2258 22.5934 34.0579 22.5119 33.9114C22.3233 33.5724 22.0403 33.2956 21.6972 33.1146C21.5489 33.0364 21.3819 32.9814 21.0478 32.8714C19.3415 32.3095 18.4883 32.0286 18.1551 31.7006C17.359 30.917 17.359 29.6333 18.1551 28.8498C18.4883 28.5218 19.3415 28.2408 21.0478 27.6789C21.3819 27.5689 21.5489 27.5139 21.6972 27.4357C22.0403 27.2548 22.3233 26.9779 22.5119 26.6389C22.5934 26.4924 22.6528 26.3246 22.7717 25.989C23.4155 24.1709 23.7374 23.2619 24.1275 22.9184C24.8831 22.2532 26.0153 22.2532 26.7708 22.9184C27.161 23.2619 27.4829 24.1709 28.1267 25.989C28.2455 26.3246 28.305 26.4924 28.3865 26.6389C28.575 26.9779 28.8581 27.2548 29.2012 27.4357C29.3495 27.5139 29.5165 27.5689 29.8505 27.6789C31.5569 28.2408 32.4101 28.5218 32.7433 28.8498C33.5394 29.6333 33.5394 30.917 32.7433 31.7006C32.4101 32.0286 31.5569 32.3095 29.8505 32.8714C29.5165 32.9814 29.3495 33.0364 29.2012 33.1146C28.8581 33.2956 28.575 33.5724 28.3865 33.9114C28.305 34.0579 28.2455 34.2258 28.1267 34.5614Z"
              fill="#EC9A29"
            />
            <path
              d="M34.7652 14.3381C34.4392 15.2929 34.2761 15.7703 34.1274 15.9908C33.3345 17.166 31.6044 17.166 30.8115 15.9908C30.6627 15.7703 30.4997 15.2929 30.1736 14.3381C30.1076 14.1448 30.0746 14.0481 30.0344 13.9596C29.8343 13.5188 29.481 13.1656 29.0403 12.9655C28.9517 12.9253 28.8551 12.8923 28.6618 12.8263C27.707 12.5002 27.2296 12.3372 27.0091 12.1884C25.8339 11.3955 25.8339 9.66543 27.0091 8.87253C27.2296 8.72374 27.707 8.56071 28.6618 8.23466C28.8551 8.16865 28.9517 8.13565 29.0403 8.09543C29.481 7.89529 29.8343 7.54208 30.0344 7.10134C30.0746 7.01277 30.1076 6.91613 30.1736 6.72284C30.4997 5.76803 30.6627 5.29062 30.8115 5.0701C31.6044 3.8949 33.3345 3.8949 34.1274 5.0701C34.2761 5.29062 34.4392 5.76803 34.7652 6.72284C34.8312 6.91613 34.8642 7.01277 34.9044 7.10134C35.1046 7.54208 35.4578 7.89529 35.8985 8.09543C35.9871 8.13565 36.0838 8.16865 36.277 8.23466C37.2319 8.56071 37.7093 8.72374 37.9298 8.87253C39.105 9.66543 39.105 11.3955 37.9298 12.1884C37.7093 12.3372 37.2319 12.5002 36.277 12.8263C36.0838 12.8923 35.9871 12.9253 35.8985 12.9655C35.4578 13.1656 35.1046 13.5188 34.9044 13.9596C34.8642 14.0481 34.8312 14.1448 34.7652 14.3381Z"
              fill="#EC9A29"
            />
          </svg>
          <p className="navs-link">Премиум</p>
        </button>
        <button
          className={`navs-item contacts ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
          <p className="navs-link">Контакты</p>
        </button>
      </div>
    </div>
  );
};

export default MainNavs;
