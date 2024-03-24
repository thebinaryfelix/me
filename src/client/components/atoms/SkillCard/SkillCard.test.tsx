import React from 'react'
import userEvent from '@testing-library/user-event'
import { sendGAEvent } from '@next/third-parties/google'
import { render, screen } from '@testing-library/react'
import { SkillCard } from './SkillCard'
import { useIsClient } from '@/client/hooks'

jest.mock('@/client/hooks', () => ({
  ...jest.requireActual('@/client/hooks'),
  useIsClient: jest.fn(() => ({ isClient: true })),
}))

jest.mock('@next/third-parties/google', () => ({
  sendGAEvent: jest.fn(),
}))

const user = userEvent.setup()

const observe = jest.fn()
const disconnect = jest.fn()

const Icon = <svg />
const tags = ['tag1', 'tag2']
const title = 'Skill Title'

const mockUseIsClient = useIsClient as jest.MockedFunction<typeof useIsClient>

describe('SkillCard Component', () => {
  beforeEach(() => {
    // @ts-ignore
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      disconnect,
    }))
  })

  test('renders correctly', () => {
    render(<SkillCard Icon={Icon} tags={tags} title={title} />)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(tags.join(', '))).toBeInTheDocument()
  })

  test('hides component if is not on client side', () => {
    mockUseIsClient.mockReturnValueOnce({ isClient: false })
    render(<SkillCard Icon={Icon} tags={tags} title={title} />)
    expect(screen.queryByText(title)).not.toBeInTheDocument()
  })

  test('toggles card rotation on click', async () => {
    render(<SkillCard Icon={Icon} tags={tags} title={title} />)

    const card = screen.getByTestId('skill-card')

    await user.click(card)
    expect(card).toHaveClass('my-rotate-y-180')

    await user.click(card)
    expect(card).not.toHaveClass('my-rotate-y-180')
  })

  test('calls sendGAEvent on card rotation', async () => {
    render(<SkillCard Icon={Icon} tags={tags} title={title} />)

    const card = screen.getByTestId('skill-card')

    await user.click(card)

    expect(sendGAEvent).toHaveBeenCalledWith('event', 'rotate_skill_card', {
      page: 'home',
      action: `click:${title}`,
      value: 'rotate-front',
    })
  })
})
