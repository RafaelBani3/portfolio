'use client';

import dynamic from 'next/dynamic';
import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  return (
    <div className="w-full h-full">
            <Spline scene="https://prod.spline.design/ev4J2XDW9JBw5Qp7/scene.splinecode" />
    </div>
  );
}
