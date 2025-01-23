import { Button, Fieldset, Input, Stack, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

const Contact = () => {
	return (
		<div className='text-black p-4'>
			<Fieldset.Root
				size='lg'
				maxW='md'
			>
				<Stack>
					<Fieldset.Legend className='text-black'>
						Contact details
					</Fieldset.Legend>
					<Fieldset.HelperText>
						Please provide your contact details below.
					</Fieldset.HelperText>
				</Stack>

				<Fieldset.Content>
					<Field label='Subject'>
						<Input name='subject' />
					</Field>

					<Field label='Email address'>
						<Input
							name='email'
							type='email'
						/>
					</Field>

					<Field label='Message'>
						<Textarea placeholder='Message' />
					</Field>
				</Fieldset.Content>

				<button className='bg-green-600 text-white w-20 h-8 rounded-md font-semibold'>
					Submit
				</button>
			</Fieldset.Root>
		</div>
	);
};

export default Contact;
