"use client";

import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About LibraLink</h1>
      <p className={styles.paragraph}>
        <strong className={styles.highlight}>Description:</strong> Develop a centralized web service that consolidates all University of Toronto library booking systems into a single, user-friendly website. This service will utilize advanced technology to streamline the booking process, reduce room search times, and minimize conflicts and inefficiencies at the front desk.
      </p>

      <h2 className={styles.subtitle}>Detailed Requirements</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Bottleneck Identification:</strong> Conduct a comprehensive analysis of the current library booking system to identify inefficiencies, particularly focusing on user experience and system integration.
        </li>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Process Improvement:</strong> Develop a unified, intuitive web interface that consolidates all library room bookings into one platform. Implement smart features such as Amazon Bedrock to provide personalized room suggestions.
        </li>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Real-Time Monitoring & Feedback:</strong> Establish mechanisms to track real-time room usage and gather feedback directly through the booking system. Implement checks to verify actual room usage at the time of booking.
        </li>
      </ul>

      <h2 className={styles.subtitle}>Increased Efficiency</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Conflict Reduction:</strong> Implement real-time room status updates and user tracking to decrease the likelihood of conflicts over room ownership, thereby minimizing the need for front desk intervention.
        </li>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Enhanced Front Desk Operations:</strong> By automating conflict resolution and booking verification, front desk staff can focus on other critical tasks, improving overall service efficiency.
        </li>
      </ul>

      <h2 className={styles.subtitle}>Cost Savings</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Reduced Staff Load:</strong> Automating room bookings and conflict management can reduce the manpower needed at front desks, lowering labour costs.
        </li>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Decreased Maintenance Costs:</strong> With a centralized system, maintenance and updates to the booking software are consolidated, reducing the costs associated with managing multiple systems.
        </li>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Efficient Resource Utilization:</strong> Better utilization of study spaces can lead to more efficient heating, lighting, and resource management, potentially lowering utility costs.
        </li>
      </ul>

      <h2 className={styles.subtitle}>Expected Outcome</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Reduced Wait Times:</strong> The streamlined interface and improved navigation will lead to faster room bookings and reduced time spent by students and staff in securing a study space.
        </li>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Improved Service Efficiency:</strong> Integration of smart technology and a centralized booking system will automate many manual tasks, enhancing operational efficiency and staff productivity.
        </li>
        <li className={styles.listItem}>
          <strong className={styles.highlight}>Enhanced User Experience:</strong> With real-time availability updates, personalized room suggestions, and direct feedback channels, the system will offer a more responsive and user-friendly experience.
        </li>
      </ul>
    </div>
  );
}
