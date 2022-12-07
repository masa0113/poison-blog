import { FC, ReactNode } from 'react';
import '../styles/globals.css'

type Props = {
    children?: ReactNode;
}

const HomeLayout: FC<Props> = ({ children }) => {
    return (
        <div
            style={{
                maxWidth: '1024px',
                textAlign: 'center',
                margin: '0 auto',
                padding: '20px',
            }}
        >
            {children}
        </div>
    );
};

export default HomeLayout;