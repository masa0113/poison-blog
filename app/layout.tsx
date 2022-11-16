import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
}

const HomeLayout: FC<Props> = ({ children }) => {
    return (
        <div
            style={{
                padding: '20px',
            }}
        >
            {children}
        </div>
    );
};

export default HomeLayout;