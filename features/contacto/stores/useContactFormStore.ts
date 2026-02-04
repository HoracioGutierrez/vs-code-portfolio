import { create } from "zustand";
import { ContactFormStore, ContactFormFields } from "../types/stores";

const useContactFormStore = create<ContactFormStore>()((set) => ({
    name: "",
    email: "",
    message: "",
    sendMessageAndSaveToDB: () => {
        console.log("sendMessageAndSaveToDB")
    },
    setPropertyValue: (property: ContactFormFields, value: string) => {
        set(() => ({ [property]: value }))
    },
    resetForm: () => {
        set(() => ({
            name: "",
            email: "",
            message: "",
        }))
    }
}))

export default useContactFormStore