import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>

                    <div className="flex w-full flex-col">
                        <FormControl>
                            {name === 'dateOfBirth' ? (<DatePicker
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input-class"
                                dateFormat="dd-MM-yyyy"
                                selected={field.value ? new Date(field.value) : undefined}
                                onSelect={field.onChange}
                                onChange={field.onChange}
                                placeholderText="dd-mm-yyyy"
                            />) : (<Input
                                id={name}
                                type={name === "password" ? "password" : "text"}
                                placeholder={placeholder}
                                className="input-class"
                                {...field}
                            />)}

                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>


                </div>
            )}
        />

    )
}

export default CustomInput