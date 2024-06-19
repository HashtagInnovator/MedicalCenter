import React from 'react';
import './SpecialisedSection.css'
import cardiology from '../asset/health.png';
import lab from '../asset/lab.png';
import mri from '../asset/mriscan.png';
import primary from '../asset/instrument.png';
import psycologist from '../asset/psycologist.png';
import test from '../asset/testtube.png';
import xray from '../asset/xray.png';

export default function SpecialisedSection() {
    return (
        <div className='SpecialisationSection'>
            <h1>Find by specialization</h1>
            <div className='boxContainer'>
                <div className='box'>
                    <img src={lab} alt='' />
                    <h3>Dentistry</h3>
                </div>
                <div className='box'>
                    <img src={primary} alt='' />
                    <h3>Primary Care</h3>
                </div>
                <div className='box'>
                    <img src={cardiology} alt='' />
                    <h3>Cardiology</h3>
                </div>
                <div className='box'>
                    <img src={mri} alt='' />
                    <h3>MRI</h3>
                </div>
                <div className='box'>
                    <img src={test} alt='' />
                    <h3>Blood Test</h3>
                </div>
                <div className='box'>
                    <img src={psycologist} alt='' />
                    <h3>Psychologist</h3>
                </div>
                <div className='box'>
                    <img src={lab} alt='' />
                    <h3>Laboratory</h3>
                </div>
                <div className='box'>
                    <img src={xray} alt='' />
                    <h3>X-Ray</h3>
                </div>
            </div>
            <button>View All</button>
        </div>
    );
};

