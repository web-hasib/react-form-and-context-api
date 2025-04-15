### 📝 React Form Handling Notes

1. `e.target.[name of the input field].value`
2. Use `form action` and `formData` in the action handler.
    
    Example: `formData.get('name of the input field')`
    
3. Controlled component: one per each field.
    
    Use `useState` on change of the field. Useful to dynamically handle errors.
    
4. Uncontrolled using `useRef`
5. Handle all controlled fields in one state object:
    
    ```
    js
    CopyEdit
    const [formData, setFormData] = useState({
      name: '',
      password: '',
      phone: ''
    });
    
    ```
    
6. using custom hook 

***context api*** 

1. create a context using createContext with a default value 
    
    make sure you export the context to be used in other files