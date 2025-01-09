import React from "react";

const SocialURL = () => {
    return (
        <div className="social-icons">
           <div className='share-buttons'>
                <p>Share on Social Media:</p>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Share on Facebook" style={{ width: '38px', height: '38px' }} />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Share on Twitter" style={{ width: '38px', height: '38px' }} />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Share on LinkedIn" style={{ width: '38px', height: '38px' }} />
                </a>
            </div>
        </div>
    );
};

export default SocialURL;