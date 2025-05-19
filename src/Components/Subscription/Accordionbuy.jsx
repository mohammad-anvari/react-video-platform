import React, { useState, useRef, useEffect } from 'react';
import './Accordionbuy.css';

const AccordionItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef(null);
    const itemRef = useRef(null);


    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            contentRef.current.style.maxHeight = '0px';
        }
    }, [isOpen]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item rounded-lg" ref={itemRef}>
            <div className={`accordion-title hover:border border  hover:border-[#D1D1D1] rounded-t-lg ${isOpen?"":"rounded-lg"}`} onClick={toggleAccordion}>
                <h2><span className='bg-[#ECECEC] text-[#999999] text-[14px] w-[20px] h-[20px] inline-block text-center pt-[2px] rounded-full me-2'><span className='bi bi-percent inline-block  rounded-full'></span></span><p className='inline-block text-[14px] font-bold'>کد تخفیف خرید اشتراک خود را وارد کنید.</p></h2>
                <span className={`${isOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}`}></span>
            </div>
            <div
                ref={contentRef}
                className="accordion-content rounded-b-lg"
                style={{ maxHeight: height }}
            >
                <div className='w-[100%] px-5'>
                    <div className='border-b pb-4'>
                    <input type="text" className='w-[80%] shadow-2xl border py-1 mt-8 rounded-md inpholder'placeholder='کد خود را وارد کنید' />
                    <button className='bg-[#1cb561] w-[18%] text-white font-bold text-[14px] rounded-lg py-1 ms-2'>تایید کد</button>
                    </div>
                </div>
                <div className="accordion-inner-content"></div>
            </div>
        </div>
    );
};

const Accordion = () => {
    return (
        <div className="accordion">
            <AccordionItem/>
        </div>
    );
};

export default Accordion;
