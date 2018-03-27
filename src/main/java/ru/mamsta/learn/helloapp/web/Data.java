package ru.mamsta.learn.helloapp.web;

public class Data<T> {

	private T value;
	
	public Data (T t) {
		this.value = t;
	}

	public T getValue() {
		return value;
	}

	public void setValue(T value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Data [value=" + value + "]";
	}
}
