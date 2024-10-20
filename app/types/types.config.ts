export type Education = {
    attendance_dates: string,
    description: string,
    photo: string,
    school_name: string
}

export type Experience = {
    duration: string,
    employer: string,
    responsibilities: string[],
    title: string,
    type: string
}

export type Project = {
    description: string,
    duration: string,
    skills: string[],
    title: string,
    image: string,
    image_alt_tag: string,
    link: string
}

export type Info = {
    resume_link: string,
    profile_pic: string,
    education: Education[],
    experience: Experience[],
    projects: Project[]
}