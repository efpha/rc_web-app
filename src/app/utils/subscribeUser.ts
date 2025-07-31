// src\app\utils\subscribeUser.ts
export async function subscribeUser(formData: {
  firstName: string;
  lastName: string;
  email: string;
}) {
  try {
    const res = await fetch('/api/subscribe', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Something went wrong');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
