#version 400 core

out vec4 FragColor;


in float Height;

void main()
{
    float h = Height / 6;// * 8;
	FragColor = vec4(h, h, h, 1.0);
}
