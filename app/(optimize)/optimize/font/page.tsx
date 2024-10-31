import { roboto, oswald } from '@/styles/fonts';

export default function Headline() {
    return (
        <>
            {/* 각 요소의 className 속성으로 폰트를 적용할 수 있습니다. */}
            <h1 className={oswald.className}>OMDb API</h1>
            <p className={roboto.className}>
                The OMDb API is a RESTful web service to obtain movie
                information, all content and images on the site are contributed
                and maintained by our users. If you find this service useful,
                please consider making a one-time donation or become a patron.
            </p>

            {/*
                CSS 변수를 사용해 폰트를 적용하는 방법도 있습니다.
                우선 각 폰트의 CSS 변수를 루트 요소 등록합니다.
            */}
            <div className={`${roboto.variable} ${oswald.variable}`}>
                {/*
                    variable이 css변수를 등록한다.
                    body에 사용하면 되겠다.
                    css파일에서 사용할 수 있다.

                    ```
                    --font-oswald: 'Oswald', 'Oswald Fallback';
                    --font-roboto: 'Roboto', 'Roboto Fallback';
                    ```

                    ```css
                    body {
                        font-family: var(--font-roboto);
                    }
                    h1, h2, h3 {
                        font-family: var(--font-oswald);
                    }
                    ```
                */}
            </div>
        </>
    );
}
