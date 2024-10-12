import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCode, FaRocket, FaUserGraduate } from 'react-icons/fa';

const Timeline = () => {
  useEffect(() => {
    // Animate each timeline element with GSAP on scroll
    gsap.from('.vertical-timeline-element', {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="p-10 bg-gray-900 min-h-screen">
      <h1 className="text-white text-4xl text-center font-bold mb-10">
        Our Journey
      </h1>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1d4ed8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #1d4ed8' }}
          date="2020 - Present"
          iconStyle={{ background: '#1d4ed8', color: '#fff' }}
          icon={<FaRocket />}
        >
          <h3 className="vertical-timeline-element-title">Launch of Project</h3>
          <p>
            We began our journey with a small group of enthusiasts, and now we
            are building the future with innovative solutions.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: '#16a34a', color: '#fff' }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">
            Open Source Contribution
          </h3>
          <p>
            Actively contributed to open-source projects, promoting a culture of
            collaboration.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={{ background: '#f59e0b', color: '#fff' }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            First Code Released
          </h3>
          <p>
            Released our first product, which paved the way for future
            advancements.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
