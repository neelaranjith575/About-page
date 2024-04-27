import { useEffect, useState } from 'react';
import PointCard from '../components/PointCard';
import data from '../assets/data.json';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';

const About = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = Object.keys(data).length - 1;

    function calculateScrollStep() {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollFraction = Math.min(1, scrollTop / (documentHeight - windowHeight));
        const step = Math.floor(scrollFraction * totalSteps);
        return step;
    }

    useEffect(() => {
        const handleScroll = () => {
            const step = calculateScrollStep();
            setCurrentStep(step);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='w-full min-h-screen bg-[#3A3A1F] flex flex-row'>
                <div className='w-[45vw] h-full py-28 sticky top-0'>
                    <div style={{ width: 450, height: 450 }} className='m-12'>
                        <CircularProgressbar
                            value={(currentStep / totalSteps) * 100}
                            text={`${currentStep + 1}/${totalSteps + 1}`}
                            strokeWidth={1}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `#F0FDF4`,
                                textColor: '#F0FDF4',
                                trailColor: '#67674B',
                            })}
                        />
                    </div>
                </div>

                <div className='SlideSec w-[40vw] h-full'>
                    <div className='w-full h-[25vh]'></div>
                    {Object.keys(data).map((key, index) => (
                        <div className='pointCard' key={key}>
                            <PointCard
                                id={key}
                                title={data[key].title}
                                description={data[key].description}
                                active={index === currentStep} // Pass only the active prop
                            />
                        </div>
                    ))}
                    <div className='w-full h-[25vh]'></div>
                </div>
            </div>
        </>
    );
};

export default About;
