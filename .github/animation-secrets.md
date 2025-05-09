# The Secret Sauce of Satisfying Animations

An analysis of what makes Sonner toast animations feel so good, based on code examination.

## Transform-Based Animations

Animations that use CSS transforms (`translate`, `scale`) instead of position properties perform better because they don't trigger layout recalculations.

```css
[data-sonner-toast][data-mounted='true'] {
  --y: translateY(0);
  opacity: 1;
}

[data-sonner-toast][data-removed='true'][data-front='true'][data-swipe-out='false'] {
  --y: translateY(calc(var(--lift) * -100%));
  opacity: 0;
}
```

The library uses the CSS variable `--y` to store transform values, making it easier to compose complex animations. This creates butter-smooth entrance and exit transitions that don't cause jank.

## Precise Timing and Easing Functions

Different animations have different timing characteristics based on their purpose:

```css
[data-sonner-toast] {
  transition: transform 400ms, opacity 400ms, height 400ms, box-shadow 200ms;
}

[data-sonner-toast][data-removed='true'][data-front='false'][data-swipe-out='false'][data-expanded='false'] {
  --y: translateY(40%);
  opacity: 0;
  transition: transform 500ms, opacity 200ms;
}
```

Notice how:
- Major movements get 400ms duration
- Shadow effects are faster at 200ms
- Exit animations have different timings for transform (500ms) and opacity (200ms)
- Box shadows transition quickly for immediate feedback

This varied timing creates a sense of physics that feels natural to the human eye.

## Variable-Based Animation System

The use of CSS custom properties to drive animations creates a flexible, maintainable system:

```css
[data-sonner-toast] {
  --y: translateY(100%);
  --lift-amount: calc(var(--lift) * var(--gap));
  transform: var(--y);
}

[data-sonner-toast][data-mounted='true'][data-expanded='true'] {
  --y: translateY(calc(var(--lift) * var(--offset)));
  height: var(--initial-height);
}
```

This approach allows:
- Composition of complex transforms
- Direction-aware animations (top vs bottom positioning)
- Easy adjustment of animation parameters

## Sophisticated Gesture Physics

The swipe-to-dismiss feature has natural-feeling physics:

```javascript
// Determine swipe direction if not already locked
if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
  setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? 'x' : 'y');
}

const getDampening = (delta: number) => {
  const factor = Math.abs(delta) / 20;
  return 1 / (1.5 + factor);
};

// Apply dampened movement for restricted swipes
const dampenedDelta = yDelta * getDampening(yDelta);
swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;

// Velocity-based dismissal
const timeTaken = new Date().getTime() - dragStartTime.current?.getTime();
const velocity = Math.abs(swipeAmount) / timeTaken;

if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
  setSwipeOutDirection(swipeAmountY > 0 ? 'down' : 'up');
  deleteToast();
  setSwipeOut(true);
}
```

This creates swipes that:
- Lock to the dominant direction for more control
- Have progressive resistance when swiping in restricted directions
- Dismiss based on either distance or velocity for natural feel
- Apply the correct exit animation based on swipe direction

## Smart Animation Choreography

Toast stacking and layering is managed with thoughtful choreography:

```css
[data-sonner-toast][data-mounted='true'] {
  --y: translateY(0);
  opacity: 1;
}

[data-sonner-toast][data-expanded='false'][data-front='false'] {
  --scale: var(--toasts-before) * 0.05 + 1;
  --y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));
  height: var(--front-toast-height);
}

[data-sonner-toast][data-expanded='false'][data-front='false'][data-styled='true'] > * {
  opacity: 0;
}
```

This creates a beautiful stack effect where:
- The front toast is fully visible
- Background toasts are slightly scaled
- Background toast content is hidden until expanded
- Z-index is dynamically calculated: `--z-index: toasts.length - index`

## Subtle Micro-Interactions

Small details add to the premium feel:

```css
[data-sonner-toast][data-styled='true'] [data-close-button]:focus-visible {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}

[data-sonner-toast][data-styled='true']:hover [data-close-button]:hover {
  background: var(--gray2);
  border-color: var(--gray5);
}

@keyframes sonner-fade-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

These details include:
- Focus states with double shadow for depth
- Hover states on interactive elements
- Subtle scale animations for icons (0.8 to 1)
- Loading spinner with staggered animation delays

## Directional Awareness

The library is smart about adapting animations to different layouts:

```css
html[dir='ltr'],
[data-sonner-toaster][dir='ltr'] {
  --toast-icon-margin-start: -3px;
  --toast-icon-margin-end: 4px;
  --toast-button-margin-start: auto;
  --toast-button-margin-end: 0;
}

html[dir='rtl'],
[data-sonner-toaster][dir='rtl'] {
  --toast-icon-margin-start: 4px;
  --toast-icon-margin-end: -3px;
  --toast-button-margin-start: 0;
  --toast-button-margin-end: auto;
}

[data-sonner-toast][data-swipe-out='true'][data-swipe-direction='left'] {
  animation-name: swipe-out-left;
}

[data-sonner-toast][data-swipe-out='true'][data-swipe-direction='right'] {
  animation-name: swipe-out-right;
}
```

Direction awareness includes:
- RTL/LTR text direction support
- Position-aware swipe animations
- Position-based entrance animations
- Adaptive margin calculations

## Accessibility Considerations

Animations respect user preferences:

```css
@media (prefers-reduced-motion) {
  [data-sonner-toast],
  [data-sonner-toast] > *,
  .sonner-loading-bar {
    transition: none !important;
    animation: none !important;
  }
}
```

This ensures that users who prefer reduced motion don't experience animations that could cause discomfort.

## Performance Optimizations

Animation performance is carefully considered:

```javascript
// Prevent batching, temp solution.
setTimeout(() => {
  ReactDOM.flushSync(() => {
    setActiveToasts((toasts) => {
      const indexOfExistingToast = toasts.findIndex((t) => t.id === toast.id);
      // Update the toast if it already exists
      if (indexOfExistingToast !== -1) {
        return [
          ...toasts.slice(0, indexOfExistingToast),
          { ...toasts[indexOfExistingToast], ...toast },
          ...toasts.slice(indexOfExistingToast + 1),
        ];
      }
      return [toast, ...toasts];
    });
  });
});
```

Performance optimizations include:
- Using `ReactDOM.flushSync` to prevent animation batching issues
- Animating only necessary properties
- Using hardware-accelerated properties (transform, opacity)
- Careful state management to prevent unnecessary re-renders

## Multiple Animation States

The toast handles numerous states gracefully:

```css
[data-sonner-toast][data-mounted='true'] { /* When first added */ }
[data-sonner-toast][data-expanded='true'] { /* When hovered/focused */ }
[data-sonner-toast][data-swiping='true'] { /* While being swiped */ }
[data-sonner-toast][data-swipe-out='true'] { /* When swiped past threshold */ }
[data-sonner-toast][data-removed='true'] { /* When being removed */ }
```

Each state transition is carefully animated, creating a fluid experience regardless of how the toast is interacted with.

## Keyframe Animation Precision

For complex animations, keyframes provide precise control:

```css
@keyframes swipe-out-left {
  from {
    transform: var(--y) translateX(var(--swipe-amount-x));
    opacity: 1;
  }

  to {
    transform: var(--y) translateX(calc(var(--swipe-amount-x) - 100%));
    opacity: 0;
  }
}

@keyframes sonner-spin {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.15;
  }
}
```

These keyframes:
- Combine existing transforms with new ones
- Account for current swipe position
- Create smooth, predictable motion

## The Complete Animation Experience

All these techniques combine to create animations that feel natural, responsive, and intentional—enhancing the user experience rather than distracting from it.

By examining how Sonner implements these animation principles, we can apply similar techniques to create equally satisfying animations in our own projects.
