import React from 'react';
import { Switch } from 'antd';

interface ToggleProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ label, checked, onChange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='mr-2' >EN </span>
            <Switch defaultChecked={checked} onChange={onChange} />
            <span className='ml-2 '>{label}</span>
        </div>
    );
};

export default Toggle;
