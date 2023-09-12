import '../styles/Banner.scss';

export function Banner({ text1, text2, imgSrc }) {
    return (
        <div className="banner">
            <img alt="Banner" src={imgSrc} />
            <div className="text-banner">
                {text1} <br className='lineBreak' />
                {text2}
            </div>
        </div>
    );
}