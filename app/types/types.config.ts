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
    title: string
}

export type Info = {
    profile_pic: string,
    education: Education[],
    experience: Experience[],
    projects: Project[]
}