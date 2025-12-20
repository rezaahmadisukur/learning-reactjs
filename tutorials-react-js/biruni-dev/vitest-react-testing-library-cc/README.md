# 📘 Comment Feature — Testing Practice (Vitest + React Testing Library)

This project is designed to help students learn how to write tests for a simple **Comment Feature** in React using **Vitest** and **React Testing Library**.

Students will work through each milestone, completing the required tests one by one.

This checklist can be used as a progress tracker for the entire learning module.

---

## 🎯 Project Description

You will test a basic **Comment Feature** consisting of:

- A form
- A textarea for writing comments
- A submit button
- A list of submitted comments displayed below the form

Your goal is to write a complete suite of tests that validate rendering, user interactions, and state updates.

## 📁 Test File Structure

The test suite is organized into two categories:

### Integration Tests (App-level)

- `App.test.tsx` - Complete integration tests covering rendering, user input, form behavior, and comment list functionality

### Unit Tests (Component-level)

- `components/CommentBox.test.tsx` - Unit tests for the CommentBox component
- `components/CommentItem.test.tsx` - Unit tests for the CommentItem component
- `components/CommentList.test.tsx` - Unit tests for the CommentList component

---

# 🧪 Learning Milestones

Below is the full checklist of test milestones.

Each milestone introduces a key concept in Vitest + React Testing Library.

Check them off as you complete them.

---

## 🔰 **1. Rendering and Basic Queries**

### **1.1 Component renders**

- Confirm the component can be rendered.
- Check that the section title (e.g., "Comment Feature") appears.

⬜ **Milestone 1.1 completed**

---

### **1.2 Form elements appear**

- Ensure the textarea is visible.
- Ensure the submit button is visible.

⬜ **Milestone 1.2 completed**

---

## 📝 **2. User Input & Interaction**

### **2.1 Typing updates the textarea**

- Simulate typing into the textarea.
- Assert that the textarea value changes accordingly.

⬜ **Milestone 2.1 completed**

---

### **2.2 Submitting adds a comment**

- Type a comment.
- Click the submit button.
- Verify the comment appears in the list.

⬜ **Milestone 2.2 completed**

---

## 🧹 **3. Form Behavior**

### **3.1 Textarea clears after submit**

- After submitting, textarea should be empty.

⬜ **Milestone 3.1 completed**

---

### **3.2 Prevent empty comments**

- Ensure submitting with an empty or whitespace-only textarea does **not** add anything to the list.

⬜ **Milestone 3.2 completed**

---

## 📚 **4. Comment List Behavior**

### **4.1 Multiple comments rendered in order**

- Submit several comments.
- Ensure all appear in the list in the order submitted.

⬜ **Milestone 4.1 completed**

---

## 🧩 **5. Component Unit Tests**

### **5.1 CommentBox Component**

- Test rendering of textarea and submit button.
- Test user input updates textarea value.
- Test form submission calls `onAddComment` with trimmed text.
- Test textarea clears after submission.
- Test empty/whitespace-only submissions are prevented.
- Test form submission via Enter key.

⬜ **Milestone 5.1 completed**

---

### **5.2 CommentItem Component**

- Test comment text is rendered correctly.
- Test timestamp is formatted and displayed.
- Test date formatting works correctly.
- Test handling of long text and special characters.

⬜ **Milestone 5.2 completed**

---

### **5.3 CommentList Component**

- Test empty state message when no comments.
- Test single comment rendering.
- Test multiple comments rendering in order.
- Test CommentItem integration.
- Test edge cases (empty text, large lists).

⬜ **Milestone 5.3 completed**

---

# 🎉 Completion Summary

| Milestone | Description                          | Status |
| --------- | ------------------------------------ | ------ |
| 1.1       | Component renders                    | ⬜     |
| 1.2       | Form elements displayed              | ⬜     |
| 2.1       | Typing updates textarea              | ⬜     |
| 2.2       | Submit adds comment                  | ⬜     |
| 3.1       | Textarea clears on submit            | ⬜     |
| 3.2       | Empty comment prevented              | ⬜     |
| 4.1       | Multiple comments rendered correctly | ⬜     |
| 5.1       | CommentBox unit tests                | ⬜     |
| 5.2       | CommentItem unit tests               | ⬜     |
| 5.3       | CommentList unit tests               | ⬜     |

---

# 📦 What Students Will Learn

By finishing all milestones, students will:

- Understand how to query elements in RTL
- Simulate typing and clicking with `userEvent`
- Assert DOM updates
- Write clean and readable tests
- Build a structured test suite for real-world components
- Write unit tests for individual components
- Test component props and callbacks
- Mock functions with Vitest
- Test edge cases and error handling
- Understand the difference between integration and unit tests
