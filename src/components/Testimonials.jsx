import React from 'react'
import '../styles/Testimonials.css'

const testimonials = [
    {
        quote: "My experience at El Cielo has been amazing. Brenda's challenging moves and the long class format inspire me. Thank you for this space and inspiring aerialists in Cairo❤️",
        name: "Menna Shamel",
        title: "Student"
    },
    {
        quote: "Nunca pensé que aprendería tanto en tan poco tiempo. Recomiendo El Cielo Academy a todos.",
        name: "María López",
        title: "Profesional"
    },
    {
        quote: "La mejor experiencia educativa que he tenido. El Cielo Academy es simplemente increíble.",
        name: "Carlos García",
        title: "Emprendedor"
    },
    {
        "quote": "El Cielo Academy ha transformado mi vida. Los cursos son excelentes y los instructores son muy atentos.",
        "name": "Juan Pérez",
        "title": "Estudiante"
    },
    {
        "quote": "Nunca pensé que aprendería tanto en tan poco tiempo. Recomiendo El Cielo Academy a todos.",
        "name": "María López",
        "title": "Profesional"
    },
    {
        "quote": "La mejor experiencia educativa que he tenido. El Cielo Academy es simplemente increíble.",
        "name": "Carlos García",
        "title": "Emprendedor"
    }
];

export const Testimonials = () => {

    return (
        <>
            <div className="testimonials-section">
                <h2>Testimonials</h2>
                <div className="testimonials-container">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <p className='quote'>{testimonial.quote}</p>
                            <p className="name">{testimonial.name}</p>
                            <p className="title">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
