import React, { useState } from 'react';
import '../styles/FAQAccordion.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggle}>
                <h4>{question}</h4>
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

const FAQAccordion = () => {
    const faqData = [
        {
            question: 'How do I book a class?',
            answer: 'To book a class, please send us a WhatsApp message to +201128239365. Specify the day, class type, your full name, and include a screenshot of your payment confirmation or contact us using the form in the "Contact" section..'
        },
        {
            question: "What should I do if I can't attend a booked class?",
            answer: "Please notify us at least 10 hours in advance. We'll arrange for you to make up the class on another day."
        },
        {
            question: 'Is the academy for women only? Are males allowed in classes?',
            answer: "Our academy is open to everyone, regardless of gender and age. If you prefer a ladies-only class, please pre-book and we'll accommodate your request in a safe environment."
        },
        {
            question: 'What should I wear?',
            answer: "Please wear tight-fitting clothes. Shoes are not allowed on the foam floor. We recommend covering your back, knees, and armpits to prevent common friction burns. Tie back long hair to avoid entanglement with equipment."
        },
        {
            question: 'Are there weight limit restrictions?',
            answer: 'The Bungee Dance Fitness class has a weight limit of 90kg for safety and durability of equipment.'
        },
        {
            question: 'Do you offer private sessions?',
            answer: 'Yes, we offer private sessions. Please contact us directly to inquire about available coaches.'
        },
        {
            question: 'Can I join classes if I have no prior training?',
            answer: "Yes, absolutely! Our classes welcome beginners. Everyone starts somewhere, and with practice, you'll progress and strengthen your skills."
        },
        {
            question: 'Can I book a class with my daughter or son?',
            answer: 'Yes, you can book private classes where parents and kids can participate together.'
        },
        {
            question: 'How safe are aerial arts classes?',
            answer: 'Aerial arts classes prioritize safety with trained instructors, proper equipment, and controlled environments. Participants are guided through techniques to minimize risks.'
        },
        {
            question: 'What safety measures are in place during classes?',
            answer: 'Classes adhere to strict safety protocols, including thorough warm-ups, spotting techniques, equipment inspections, and clear communication between instructors and participants.'
        },
        {
            question: 'What qualifications do instructors have to ensure safety?',
            answer: 'Our instructors are certified professionals with extensive training in aerial arts, including safety practices, first aid, and emergency procedures.'
        },
        {
            question: 'Can beginners participate safely in aerial arts classes?',
            answer: 'Yes, beginners are welcome! Classes are structured to accommodate varying skill levels, with foundational training provided to ensure safety and progression.'
        },
        {
            question: 'How do you ensure the safety of aerial equipment?',
            answer: 'All our aerial equipment is certified and is regularly inspected and maintained to meet safety standards. Any damaged or worn equipment is promptly replaced or repaired.'
        }
    ];

    const safetyRulesData = [
        {
            question: 'Safety Rules and Classroom Policies',
            answer: (
                <ul>
                    <li>Remove all jewelry that could snag or get tangled in equipment. Avoid wearing clothing with zippers or buckles to prevent damage or injury.</li>
                    <li>Wear tight-fitting clothing to avoid entanglement in equipment. Crop tops are allowed but should be worn under discretion, as some movements can cause friction burns.</li>
                    <li>Only perform exercises covered in class. If you wish to try something new, consult your instructor first. Do not use apparatus without instructor permission.</li>
                    <li>Always use crash mats; no exceptions.</li>
                    <li>No gum or food allowed in the studio.</li>
                    <li>Only clean bare feet or socks are permitted on the foam floor. Shoe shelves are available for storage.</li>
                    <li>Refrain from attending class if you are ill.</li>
                    <li>Please wear clean workout attire and use deodorant to ensure a considerate environment.</li>
                    <li>Talking is permitted during class, but please respect your instructor's teaching and remain attentive.</li>
                </ul>
            )
        },
        {
            question: 'Circus Factory Kids',
            answer: (
                <ul>
                    <li>All adult rules apply to children's classes. It is crucial for children to follow all instructions for a safe and productive class environment, including taking turns when necessary.</li>
                    <li>For the safety and focus of the children, parents can observe classes through viewing windows but should refrain from giving instructions or approaching students.</li>
                    <li>Students may only use equipment under direct instructor supervision.</li>
                    <li>Parents must ensure punctuality for picking up their children timely at the end of each session.</li>
                </ul>
            )
        }
    ];

    const cancellationPoliciesData = [
        {
            question: 'Cancellation Policies',
            answer: (
                <ul>
                    <li>Group Classes: Please cancel at least 10 hours before your scheduled class to avoid deduction from your package or drop-in fee.</li>
                    <li>Private Classes: We require 24 hours' notice to cancel or reschedule your private session. Cancellations made within 24 hours are subject to a "late cancel" charge.</li>
                    <li>Late Arrival: Unless otherwise noted, classes begin promptly as scheduled on our social media and training schedule. Attendees arriving more than 15 minutes late may not be admitted or may only observe, at the discretion of the head coach. Refunds, credits, or additional makeup sessions are not provided in such cases.</li>
                    <li>No Shows: Failure to attend a scheduled class without timely notification will result in charges for the session.</li>
                    <li>Class Cancellation by Academy: In the event that a class has only one sign-up, it will be canceled by El Cielo Academy at least two hours prior to the scheduled time. Students will be notified by phone and/or email. El Cielo Academy reserves the right to modify any class schedule.</li>
                    <li>Registration for Classes: To secure your spot, payment via Instapay must be made at least 24 hours before your selected class. Pre-booking is mandatory to stay updated on any schedule changes.</li>
                    <li>Package Policies: All packages are valid for one month and are non-shareable, non-refundable, and cannot be frozen or extended. If you are unable to continue due to a medical reason, please provide a medical note for consideration of a refund. Refunds, if approved, may take up to 31 working days to process.</li>
                </ul>
            )
        }
    ];

    return (
        <div className="faq-accordion">
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
            <h2>Safety Rules and Classroom Policies</h2>
            {safetyRulesData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
            <h2>Cancellation Policies</h2>
            {cancellationPoliciesData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default FAQAccordion;
