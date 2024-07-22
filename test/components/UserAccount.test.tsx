import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

describe('UserAccount', () => {
	it('should not render the button if user is not admin', () => {
		const user: User = {
			id: 1,
			name: 'Bohdan',
			isAdmin: false,
		}
		render(<UserAccount user={user}/>)

		// we use queryByRole if an element will not be rendered
		const button = screen.queryByRole('button') 
		expect(button).not.toBeInTheDocument();
	}),

	it('should render the button if user is admin', () => {
		const user: User = {
			id: 1,
			name: 'Bohdan',
			isAdmin: true,
		}
		render(<UserAccount user={user}/>)

		const button = screen.getByRole('button')
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Edit');
	}),

	it('should render user name', () => {
		const user: User = {
			id: 1,
			name: 'Bohdan'
		}
		render(<UserAccount user={user}/>)
		expect(screen.getByText(user.name)).toBeInTheDocument();
	})
})