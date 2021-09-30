import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import React, { forwardRef } from "react"

interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
    label: string
    fontSize?: string
}
export const InputField: React.FC<InputFieldProps> = ({ ...props }) => {
    return (
        <FormControl id={props.id}>
            <FormLabel fontSize={props.fontSize || "sm"} color="gray.500">
                {props.label}
            </FormLabel>
            <Input
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                value={props.value}
                onChange={props.onChange}
                px={4}
                fontSize={"sm"}
                focusBorderColor={"none"}
                bgColor={"gray.100"}
                rounded={"lg"}
            />
        </FormControl>
    )
}
